import { FC, PropsWithChildren, useCallback, useMemo } from 'react'
import { likeIcon } from 'shared/images'
import { Post } from 'shared/types'
import { Button } from 'shared/ui/button'

interface IPost extends PropsWithChildren {
  post: Post
}

export const PostToggleLike: FC<IPost> = ({ post }) => {
  const onLikeClick = useCallback(() => {}, [])

  // const isLiked = useMemo(
  //   () => card.owner._id === currentUser._id || card.owner === currentUser._id,
  //   [card, currentUser],
  // )

  return (
    <Button onClick={onLikeClick} view="post">
      <img src={likeIcon} alt="Like Icon" />
      <p>{post.likes.length}</p>
    </Button>
  )
}
