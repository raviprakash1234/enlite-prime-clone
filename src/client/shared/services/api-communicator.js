import axios from "axios";
import config from "@client/config";
import {
  getToken,
  replaceToken,
  isJWTExpired,
  responseFormatter,
} from "@client/utils";
import { noop, sessionExpireMsg } from "@client/shared/constants";
let isRefreshing = false;
let refreshSubscribers = [];
let requestWindow = 60;
let limit = 60;
let isFetchingJWKS = null;
let refreshingJwks = null;

const apiInstance = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 4 * 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiInstance.interceptors.request.use((config) => {
  if (config.setAuthHeader) {
    const token = getToken();
    config.headers.common["Authorization"] = token;
  }
  if (!!config.rcAccountId) {
    config.headers.common["RcAccountId"] = config.rcAccountId;
  }
  if (config.setTimeout) {
    config.timeout = config.setTimeout;
  }

  return config;
});

// Add a request interceptor
apiInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const originalRequest = config;
    let token = getToken();
    if (
      isJWTExpired(token) &&
      !/login/i.test(originalRequest.url) &&
      !/refreshtoken/i.test(originalRequest.url) &&
      !/profile-image/i.test(originalRequest.url) &&
      !/version/i.test(originalRequest.url)
    ) {
      if (!isRefreshing) {
        isRefreshing = true;
        const { data } = await refreshAccessToken(token);

        if (!data || !data.accessToken)
          return Promise.reject({ message: sessionExpireMsg });

        replaceToken(data.accessToken);
        isRefreshing = false;
        onRrefreshed(data.accessToken);
      }

      subscribeTokenRefresh((token) => {
        // replace the expired token and retry
        originalRequest.headers["Authorization"] = token;

        return originalRequest;
      });

      return config;
    } else {
      return config;
    }
  },
  (error) => {
    // Do something with request error
    return Promise.reject(sessionExpireMsg);
  }
);

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRrefreshed = (token) => {
  refreshSubscribers.forEach((cb) => {
    cb(token);
  });
  refreshSubscribers = [];
};

const refreshAccessToken = async (token) => {
  return await responseFormatter(
    apiInstance.get("refreshtoken", { headers: { Authorization: token } })
  );
};

let startTime = Date.now();
let remaining = 100;
let window = 60;

const updateStartTime = async (headers, startTime) => {
  let now = Date.now();
  let delay = 0;

  if (remaining == 0) {
    let diff = now - startTime;
    delay = window * 1000 - diff;
  }
  await new Promise((resolve) => setTimeout(resolve, delay));
  return now + delay;
};

export const twilioApi = axios.create({
  baseURL: config.twilioBaseUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/x-www-form-urlencoded",
  },
});
twilioApi.interceptors.request.use(async (config) => {
  const { accountId, token } = config;
  if (!!token) {
    config.headers["Authorization"] = `Basic ${btoa(accountId + ":" + token)}`;
  }
  return config;
});
export const twilioPricing = axios.create({
  baseURL: config.twilioPricingBaseUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/x-www-form-urlencoded",
  },
});
twilioPricing.interceptors.request.use(async (config) => {
  const { accountId, token } = config;
  if (!!token) {
    config.headers["Authorization"] = `Basic ${btoa(accountId + ":" + token)}`;
  }
  return config;
});

export const jwksApi = axios.create({
  baseURL: config.rcApiBaseUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
jwksApi.interceptors.request.use(async (config) => {
  startTime = await updateStartTime(config.hooks?.rateLimitReached || noop);
  return config;
});
jwksApi.interceptors.response.use(async (response) => {
  if (response.headers["x-rate-limit-remaining"]) {
    remaining = response.headers["x-rate-limit-remaining"];
    // console.log("RESPONSE", response.headers["x-rate-limit-remaining"]);
  }
  if (response.headers["x-rate-limit-window"]) {
    requestWindow = response.headers["x-rate-limit-window"];
  }
  if (response.headers["x-rate-limit-limit"]) {
    limit = response.headers["x-rate-limit-limit"];
    // console.log("LIMIT", response.headers["x-rate-limit-limit"]);
  }
  return response;
});

const http = {
  ...apiInstance,
  twilio: twilioApi,
  tp: twilioPricing,
};

export default http;
