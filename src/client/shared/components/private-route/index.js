import React from "react";
import config from "@client/config";
import { getRCRedirectUri, getToken, isJWTExpired } from "@client/utils";

/**
 * Route component that ensures authorization for protected routes.
 */
export default ({ element = <></> }) => {
  const isAuthenticated = !isJWTExpired(getToken());
  const { rc_client_Id, rc_authorize_uri, apiBaseUrl } = config;
  if (isAuthenticated) {
    return element;
  } else {
    window.location.replace(
      getRCRedirectUri(
        rc_authorize_uri,
        rc_client_Id,
        apiBaseUrl,
        window.location.href
      )
    );
    return null;
  }

  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => {
  //       if (isAuthenticated) {
  //         return <Component {...props} />;
  //       } else {
  //         window.location.replace(
  //           getRCRedirectUri(
  //             rc_authorize_uri,
  //             rc_client_Id,
  //             apiBaseUrl,
  //             window.location.href
  //           )
  //         );
  //       }
  //     }}
  //   />
  // );
};
