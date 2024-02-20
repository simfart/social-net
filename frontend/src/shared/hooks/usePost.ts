/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { usePosts } from './usePosts'

export const usePost = (id: string) => {
  const { data: posts } = usePosts()
  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => posts.find((post: any) => post._id === id),
    initialData: null,
  })

  return useMemo(() => ({ post, isLoading }), [post, isLoading])
}
