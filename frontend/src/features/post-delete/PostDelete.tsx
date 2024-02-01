import { FC, PropsWithChildren, useCallback } from 'react'
import { cn } from '@bem-react/classname'
import { dotsIcon } from 'shared/images'
import { Button } from 'shared/ui/button'
import { Loader } from 'shared/ui/loader/Loader'
import { useDeletePost } from 'shared/hooks'
import { Post } from 'shared/types'

import './PostDelete.scss'

const CnDropdown = cn('dropdown')

interface IPost extends PropsWithChildren {
  post: Post
}

export const PostDelete: FC<IPost> = ({ post }) => {
  const { mutate, isLoading } = useDeletePost()

  const onDeleteClick = useCallback(() => {
    mutate(post._id)
  }, [mutate, post._id])

  if (isLoading) return <Loader />

  return (
    <div className={CnDropdown()}>
      <img src={dotsIcon} alt="" />
      <div className={CnDropdown('content')}>
        <Button view="edit" onClick={onDeleteClick}>
          Delete
        </Button>
      </div>
    </div>
  )
}
