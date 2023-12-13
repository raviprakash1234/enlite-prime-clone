import { decodeJwt } from "jose";
import { TOKEN_STORAGE_KEY } from "@client/shared/constants";

let handleTokenUpdate = null;

export const getTokenName = () => TOKEN_STORAGE_KEY;
export const decodeToken = (access_token = "") => {
  if (!access_token) return {};
  const decodedTokenData = decodeJwt(access_token);
  const { userData, rcToken } = decodedTokenData;
  return {
    ...userData,
    rcuser_uid: rcToken.owner_id,
    rc_access_token: rcToken.access_token,
  };
};

export const getToken = () => {
  // let token = Cookies.get(TOKEN_STORAGE_KEY) || "";
  // if (typeof window === "undefined" && !token) {
  //   const appData = AppService.getAppData();
  //   token = appData.token;
  // }
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const getTokenData = () => {
  return decodeToken(getToken());
};

export const setToken = (token) => {
  // Cookies.set(TOKEN_STORAGE_KEY, token, { expires: 7, path: "/" });
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  if (handleTokenUpdate) {
    handleTokenUpdate();
  }
};

export const removeToken = () => {
  // Cookies.remove(TOKEN_STORAGE_KEY, { expires: 7, path: "/" });
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};

export const replaceToken = (token) => setToken(token);

export const isJWTExpired = (token, alreadyDecoded) => {
  try {
    const { exp } = alreadyDecoded ? token : decodeJwt(token);
    if (Date.now() >= exp * 1000 - 300000) {
      return true;
    }
  } catch (err) {
    return true;
  }
  return false;
};

// eslint-disable-next-line consistent-return
export const onTokenUpdate = (callBack, accountUid) => {
  if (callBack) {
    handleTokenUpdate = callBack;
  }

  if (!callBack && handleTokenUpdate) {
    return handleTokenUpdate(accountUid);
  }
};
