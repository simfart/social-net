import { api } from "./api"

type PostTypes = {
    postId: string
    isLiked: boolean
   }

export const toggleLikePost = async ({ postId, isLiked }:PostTypes) => {
    if (isLiked) {
      return await dislikePost(postId)
    } else {
      return await likePost(postId)
    }
  }
 

 const likePost = async (payload:string) =>  await api.put(`/posts/${payload}/likes`)
   
 const dislikePost = async (payload:string) => await api.delete(`/posts/${payload}/likes`)