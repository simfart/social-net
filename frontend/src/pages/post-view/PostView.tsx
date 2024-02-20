/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { usePost } from 'shared/hooks/usePost'

export const PostView: FC = () => {
  const params = useParams()
  const { post } = usePost((params as any)?.postId)

  return <div>ffffffffffff</div>
}
