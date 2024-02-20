import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deletePost } from "shared/api";


export const useDeletePost = () =>{
    const queryClient = useQueryClient()

    const {mutate, isLoading} = useMutation(deletePost, {
        onSuccess: () =>{
            queryClient.invalidateQueries(['userPosts'],)
            queryClient.invalidateQueries(['posts'],)        
        },
       onError:(err)=>{
        console.log(err)
       }
    })
    return useMemo(()=>({mutate, isLoading}), [isLoading, mutate])
}