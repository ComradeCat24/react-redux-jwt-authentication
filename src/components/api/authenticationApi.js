import axiosAPI, { setNewHeaders } from "./axiosApi";

export async function signUp(data) {
  const response = await axiosAPI.post("auth/signup", data);
  // localStorage.setItem("user", response.data);
  return response;
}

export async function obtainToken(email, password) {
  const response = await axiosAPI.post("auth/login", {
    email,
    password,
  });
  setNewHeaders(response);
  return response;
}

export async function refreshToken(refresh) {
  const response = await axiosAPI.post("auth/refresh/", {
    refresh,
  });
  setNewHeaders(response);
  return response;
}

// eslint-disable-next-line
export async function logout(accessToken) {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};
