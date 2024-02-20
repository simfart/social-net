import { useMemo } from "react"
import { useMutation, useQueryClient } from "react-query"
import { createComment } from "shared/api"


export const useComment = () =>{

    const queryClient = useQueryClient()

    const {mutate, isLoading} = useMutation(createComment, {
        onSuccess: (data) =>{
            queryClient.invalidateQueries(['userPosts'],)
            queryClient.invalidateQueries(['posts'],)
            console.log(data)
    }})
return useMemo(()=>({mutate, isLoading}), [mutate, isLoading])
}