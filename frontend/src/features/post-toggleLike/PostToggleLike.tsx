import { FC, PropsWithChildren, useCallback, useMemo } from 'react'
import { useToggleLike } from 'shared/hooks'
import { useUser } from 'shared/hooks/useUser'
import { likeIcon } from 'shared/images'
import { likeIconActive } from 'shared/images'
import { Post } from 'shared/types'
import { Button } from 'shared/ui/button'
import { Loader } from 'shared/ui/loader/Loader'

interface IPost extends PropsWithChildren {
  post: Post
}

export const PostToggleLike: FC<IPost> = ({ post }) => {
  const { data: currentUser } = useUser()

  const { mutate, isLoading } = useToggleLike()
  const isLiked = useMemo(
    () => post.likes.some((i) => i === currentUser?._id),
    [currentUser?._id, post.likes],
  )

  const onLikeClick = useCallback(() => {
    mutate({ postId: post._id, isLiked })
  }, [isLiked, mutate, post._id])

  isLoading && <Loader />

  return (
    <Button onClick={onLikeClick} view="post">
      <img src={isLiked ? likeIconActive : likeIcon} alt="Like Icon" />
      <p>{post.likes.length}</p>
    </Button>
  )
}
