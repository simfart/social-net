import { FC, PropsWithChildren } from 'react'
import { Button } from 'shared/ui/button'
import { likeIcon, commentIconn } from 'shared/images'

import './PostForm.scss'
import { cn } from '@bem-react/classname'

interface IPostForm extends PropsWithChildren {
  owner: Record<string, string>

  timeAgo?: string

  onCommentClick?: () => void
  onLikeClick?: () => void
  post: Record<string, string>
  // page?: 'default' | 'auth' | 'discard' | 'publish' | 'edit'
}

const CnPost = cn('postForm')

export const PostForm: FC<IPostForm> = ({
  owner,
  timeAgo,
  onLikeClick,
  onCommentClick,
  post,
}) => {
  return (
    post && (
      <div className={CnPost()}>
        <div className={CnPost('profile')}>
          <img src={owner?.avatar} alt="Owner avatar" />
          <div className={CnPost('container')}>
            <h3>{owner?.name}</h3>
            <p>{post.createdAt}</p>
          </div>
        </div>
        <div className={CnPost('content')}>
          <p>{post.description}</p>
          <img src={post.image} alt="Post Picture" />
        </div>
        <div className={CnPost('actions')}>
          <Button onClick={onLikeClick}>
            <img src={likeIcon} alt="Like Icon" />
            <p>{post.likes.length}</p>
          </Button>
          <Button onClick={onCommentClick}>
            <img src={commentIconn} alt="Like Icon" />
            <p>{post.comments.length}</p>
          </Button>
        </div>
      </div>
    )
  )
}
