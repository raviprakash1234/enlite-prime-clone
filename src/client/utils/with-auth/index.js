import { AppService } from "@client/shared/services";
import { getTokenName, getRCRedirectUri, isJWTExpired } from "@client/utils";
import config from "@client/config";

const withAuth = (callback, exemptedPaths = []) => {
  return async (context) => {
    let response = {};
    const token = context.req.cookies[getTokenName()];
    const { rc_client_Id, rc_authorize_uri, apiBaseUrl, appUrl } = config;
    const currentLocation = `${appUrl}${context.resolvedUrl}`;
    const redirectURL = getRCRedirectUri(
      rc_authorize_uri,
      rc_client_Id,
      apiBaseUrl,
      currentLocation
    );

    let isAuthenticated = true;
    if (token) {
      AppService.setAppData("token", token);
      const hasTokenExpired = isJWTExpired(token);
      if (hasTokenExpired) {
        isAuthenticated = false;
      }
    } else {
      isAuthenticated = false;
    }

    if (isAuthenticated) {
      response = await callback(context, redirectURL);
    } else {
      response.redirect = {
        destination: redirectURL,
        permanent: false,
      };
    }

    return response;
  };
};

export default withAuth;
