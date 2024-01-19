import { api } from "./api";

export const newPost = async (payload: {
  description: string;
  image?: string;
  video?: string;
}) => {
  return await api.post(`/posts`, payload).then((res) => res.data);
};
