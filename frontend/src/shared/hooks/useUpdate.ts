import { useMemo } from "react";
import {useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { updateUser } from "shared/api";

export const useUpdate =()=>{

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const {mutate, isLoading} = useMutation(updateUser, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["user"]);
            navigate('/profile')
        },
        onError: (err) =>{
            console.log(err)
        }
    })
    return useMemo(()=>({mutate, isLoading}), [isLoading, mutate])
}