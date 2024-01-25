import { useQuery } from "react-query";
import { getUserPosts } from "shared/api";


export const useUserPosts = () => useQuery('userPosts', getUserPosts)