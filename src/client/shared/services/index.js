import http from "./api-communicator";
import { responseFormatter } from "@client/utils";
export { default as http, twilioApi } from "./api-communicator";

function logoutUser(token) {
  return responseFormatter(
    http.post(`logout`, null, {
      headers: {
        Authorization: token,
      },
    })
  );
}

export const AppService = {
  logoutUser,
};
