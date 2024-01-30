import { FC, PropsWithChildren, useRef } from 'react'
import { Button } from 'shared/ui/button'
import { likeIcon, commentIconn } from 'shared/images'
import { useShotenElement } from 'shared/hooks'
import { useTimeAgo } from 'shared/hooks'
import { cn } from '@bem-react/classname'
import { YoutubeFrame } from 'entities/youtube-frame'
import { Post, User } from 'shared/types'

import './PostForm.scss'

interface IPostForm extends PropsWithChildren {
  owner: User
  post: Post
  onCommentClick?: () => void
  onLikeClick?: () => void
}

const CnPostForm = cn('postForm')

export const PostForm: FC<IPostForm> = ({
  owner,
  post,
  onLikeClick,
  onCommentClick,
}) => {
  const ref = useRef(null)
  const { isShorten } = useShotenElement({ ref })
  const createdAt = useTimeAgo(post.createdAt)

  return (
    post && (
      <div className={CnPostForm()}>
        <div className={CnPostForm('profile')}>
          <img src={owner?.avatar} alt="Owner avatar" />
          <div className={CnPostForm('container')}>
            <h3>{owner?.name}</h3>
            <p>{createdAt}</p>
          </div>
        </div>
        <div className={CnPostForm('content')}>
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
          {post.video && <YoutubeFrame videoURL={post.video} />}
        </div>
        <div className={CnPostForm('actions')}>
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
