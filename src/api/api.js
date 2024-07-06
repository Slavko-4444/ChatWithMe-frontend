import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const baseUrl = "http://localhost:5000";
function api(path, body, method = "get", Headers = "app") {
  const requestDATA = {
    method: method,
    baseURL: baseUrl,
    url: path,
    data: body,
    headers: {
      "Content-Type":
        Headers === "app" ? "application/json" : "multipart/form-data;",
      Authorization: getToken(),
    },
  };

  return new Promise((resolve, reject) => {
    axios(requestDATA)
      .then((res) => resolve(res))
      .catch((error) => {
        reject(error);
      });
  });
}

export function getToken() {
  const token = localStorage.getItem("authToken");
  return "Bearer " + token;
}

export function saveToken(token) {
  localStorage.setItem("authToken", token);
}

export function saveIdentity(identity) {
  localStorage.setItem("api_identity", identity);
}

export default api;
