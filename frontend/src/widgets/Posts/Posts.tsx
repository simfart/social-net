import { FC, useMemo } from 'react'
import { useUserPosts } from 'shared/hooks/useUserPosts'
import { PostForm } from '../../entities/post-form'
import { useUser } from 'shared/hooks/useUser'

import './Posts.scss'
import { cn } from '@bem-react/classname'

const CnPosts = cn('posts')

export const Posts: FC = () => {
  const { data: user } = useUser()
  const { data: userPosts } = useUserPosts()

  const NavItems = useMemo(() => {
    return (
      userPosts &&
      userPosts
        .map((item: Record<string, string>, index: number) => {
          return (
            <li key={index}>
              <PostForm owner={user?.data} post={item} />
            </li>
          )
        })
        .reverse()
    )
  }, [user?.data, userPosts])

  return <ul className={CnPosts()}>{NavItems}</ul>
}