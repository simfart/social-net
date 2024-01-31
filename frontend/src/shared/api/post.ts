import { api } from "./api";

export const newPost = async (payload:{[k:string]:string}) => {
  return await api.post(`/posts`, payload).then((res) => res.data);
};

export const getPosts = async () => {
  return await api.get(`/posts`).then((res) => res.data);
};

export const getUserPosts = async () => {
  return await api.get(`/posts/my`).then((res) => res.data);
};

export const deletePost = async (payload:string) => {
  return await api.delete(`/posts/${payload}`).then((res) => res.data);
};


