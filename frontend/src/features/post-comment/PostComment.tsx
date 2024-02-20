import { FC, PropsWithChildren, useCallback } from 'react'
import { commentIconn } from 'shared/images'
import { Post } from 'shared/types'
import { Button } from 'shared/ui/button'

interface IPost extends PropsWithChildren {
  post: Post
}

export const PostComment: FC<IPost> = ({ post }) => {
  const onCommentCreate = useCallback(() => {}, [])

  return
  ;<Button onClick={onCommentCreate} view="post">
    <img src={commentIconn} alt="Like Icon" />
    <p>{post.comments.length}</p>
  </Button>
}
