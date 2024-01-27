import { FC, PropsWithChildren, useRef } from 'react'
import { Button } from 'shared/ui/button'
import { likeIcon, commentIconn } from 'shared/images'
import { useShotenElement } from 'shared/hooks'
import { useTimeAgo } from 'shared/hooks'

import './PostForm.scss'
import { cn } from '@bem-react/classname'

interface IPostForm extends PropsWithChildren {
  owner: Record<string, string>

  onCommentClick?: () => void
  onLikeClick?: () => void
  post: Record<string, string>
  // page?: 'default' | 'auth' | 'discard' | 'publish' | 'edit'
}

const CnPost = cn('postForm')

export const PostForm: FC<IPostForm> = ({
  owner,
  onLikeClick,
  onCommentClick,
  post,
}) => {
  const ref = useRef(null)
  const { isShorten } = useShotenElement({ ref })
  console.log(post.createdAt)
  const createdAt = useTimeAgo(post.createdAt)

  return (
    post && (
      <div className={CnPost()}>
        <div className={CnPost('profile')}>
          <img src={owner?.avatar} alt="Owner avatar" />
          <div className={CnPost('container')}>
            <h3>{owner?.name}</h3>
            <p>{createdAt}</p>
          </div>
        </div>
        <div className={CnPost('content')}>
          {post.description && (
            <p ref={ref}>
              <span>{post.description}</span>
              {isShorten && (
                <a href="#" tabIndex={-1}>
                  Show More
                </a>
              )}
            </p>
          )}
          {post.image && <img src={post.image} alt="Post Picture" />}
        </div>
        <div className={CnPost('actions')}>
          <Button onClick={onLikeClick} view="post">
            <img src={likeIcon} alt="Like Icon" />
            <p>{post.likes.length}</p>
          </Button>
          <Button onClick={onCommentClick} view="post">
            <img src={commentIconn} alt="Like Icon" />
            <p>{post.comments.length}</p>
          </Button>
        </div>
      </div>
    )
  )
}
