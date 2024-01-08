import { api } from "./api";

export const login = async (payload: {
  email: string,
  password: string
}) => {
  return await api.post<{ token: string }>(`/signin`, payload).then((res) => res.data);
};

export const register = async <T>(payload: T) => {
  return await api.post(`/signup`, payload).then((res) => res.data);
};

export const logout = async () => {
  return await api
    .get(`/signout`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getUser = async () => {
  return await api.get(`/users/me`).then((res) => res.data);
};
