import { jwtDecode } from "jwt-decode";
import http from "./http";

export function register(username, password) {
  return http.post("/users", { username, password });
}

export function login(username, password) {
  return http.post("/auth", { username, password });
}

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function getCurrenUser() {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    const decode = jwtDecode(accessToken);
    return decode.user;
  }

  return null;
}

export function logout() {
  localStorage.removeItem("accessToken");
}
