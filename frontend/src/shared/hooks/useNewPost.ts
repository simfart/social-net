import { useMemo } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { newPost } from 'shared/api'

export const useNewPost = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation(newPost, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['post'])

      navigate('/', { replace: true })

      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
  })

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading])
}
