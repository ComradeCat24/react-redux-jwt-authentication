import axiosAPI, { setNewHeaders } from "./axiosApi";

export const signUp = async (data) => {
  const response = await axiosAPI.post("auth/signup", data);
  return response;
};

export const obtainToken = async (email, password) => {
  const response = await axiosAPI.post("auth/login", {
    email,
    password,
  });
  setNewHeaders(response);
  return response;
};

export const refreshToken = async (refresh) => {
  const response = await axiosAPI.post("auth/refresh/", {
    refresh,
  });
  setNewHeaders(response);
  return response;
};

export const logout = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");
  return !!token;
};
