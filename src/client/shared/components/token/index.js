import { useNavigate, useLocation } from "react-router-dom";

import {
  PAGE_KEYS,
  THEME_VARIANT,
  USER_CONFIG_STORAGE_KEY,
} from "@client/shared/constants";
import { toast } from 'react-toastify';
import { setPageConfig, setToken } from "@client/utils";
import config from "@client/config";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const access_token = params.get("access_token");
  const returnurl = params.get("returnurl");
  if (access_token && access_token.length > 0) {
    setToken(access_token);
		sessionStorage.removeItem('portal-login');
    fetch(`${config.apiBaseUrl}user/me`, {
      headers: {
        Authorization: access_token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const { data, error } = response;
        if (error) {
            toast.error(Array.isArray(error) ? error[0].message : error);
        } else {
          localStorage.setItem(USER_CONFIG_STORAGE_KEY, JSON.stringify(data));

          if (data.user.nickName) {
            sessionStorage.setItem("nickname", data.user.nickName);
          }

          setPageConfig(PAGE_KEYS.GLOBAL, {
            theme: data.user?.theme || THEME_VARIANT.LIGHT,
            layout: data.user?.layout,
          });
          window.location.replace(returnurl);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, please contact system administrator.");
        if (
          process.env.NODE_ENV &&
          process.env.NODE_ENV.toLowerCase() === "development"
        ) {
          console.log("Error fetching user role");
          console.error(error);
        }
      });
  } else {
    navigate("/");
  }

  return null;
};
