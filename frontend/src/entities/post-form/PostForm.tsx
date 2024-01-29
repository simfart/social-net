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
          {post.video && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XVgCLQ_JQfU"
              title="YouTube video player"
              srcDoc="<style>*{padding:0;margin:0;overflow:hidden}
    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
    </style>
    <a href=https://www.youtube.com/embed/XVgCLQ_JQfU?autoplay=1>
    <img src=https://img.youtube.com/vi/XVgCLQ_JQfU/hqdefault.jpg alt='Img'>
    <span>▶</span>
    </a>"
            ></iframe>
          )}
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
