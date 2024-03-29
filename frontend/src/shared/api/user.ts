import { User } from 'shared/types'
import { api } from './api'

export const login = async (payload: { email: string; password: string }) => {
  return await api
    .post<{ token: string }>(`/signin/`, payload)
    .then((res) => res.data)
}

export const register = async (payload: { [k: string]: string }) => {
  return await api.post(`/signup/`, payload).then((res) => res.data)
}

export const logout = async () => {
  return await api
    .get(`/signout/`)
    .then((res) => res.data)
    .catch((err) => err)
}

export const getUser = async () => {
  return await api
    .get<{ data: User }>(`/users/me/`)
    .then((res) => res.data.data)
}

export const updateUser = async (payload: { [k: string]: string }) => {
  return await api.patch(`/users/me/`, payload).then((res) => res.data)
}

export const getUsers = async () => {
  return await api.get(`/users/`).then((res) => res.data)
}
