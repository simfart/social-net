import { useMemo } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toggleLikePost } from 'shared/api'

export const useToggleLike = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(toggleLikePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userPosts'])
      queryClient.invalidateQueries(['posts'])
    },
    onError: (err) => {
      console.log(err)
    },
  })
  return useMemo(() => ({ mutate, isLoading }), [isLoading, mutate])
}
