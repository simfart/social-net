import { FC, useMemo } from 'react'
import { useUserPosts } from 'shared/hooks/useUserPosts'
import { PostForm } from '../../entities/post-form'
import { useUser } from 'shared/hooks/useUser'

import './Posts.scss'
import { cn } from '@bem-react/classname'
import { Post } from 'shared/types'

const CnPosts = cn('posts')

export const Posts: FC = () => {
  const { data: user } = useUser()
  const { data: userPosts } = useUserPosts()

  const postsItems = useMemo(() => {
    if (!userPosts || !user) return null

    return userPosts
      .map((item: Post, index: number) => {
        return (
          <li key={index}>
            <PostForm owner={user} post={item} />
          </li>
        )
      })
      .reverse()
  }, [user, userPosts])

  return <ul className={CnPosts()}>{postsItems}</ul>
}
