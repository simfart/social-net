import { useQuery } from "react-query";
import { getPosts } from "shared/api";

export const usePosts = () => useQuery('posts', getPosts)