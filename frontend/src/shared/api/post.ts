import { api } from "./api";

export const newPost = async (payload:{[k:string]:string}) => {
  return await api.post(`/posts`, payload).then((res) => res.data);
};
