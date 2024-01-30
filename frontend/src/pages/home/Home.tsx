/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@bem-react/classname'
import { FC, useEffect, useMemo, useState } from 'react'
import { useUser } from 'shared/hooks/useUser'
import { Navbar } from 'widgets/navbar'
import { usePosts } from 'shared/hooks/usePosts'
import { PostForm } from 'entities/post-form'
import { Post } from 'shared/types'

import './Home.scss'

const CnHome = cn('home')

export const Home: FC = () => {
  const [greetingText, setGreetingText] = useState<string>()
  const hour = new Date().getHours()
  const { data: currentUser } = useUser()
  const { data: allPosts } = usePosts()

  useEffect(() => {
    const greetingTypes = [
      'Good morning, ',
      'Good afternoon, ',
      'Good evening, ',
    ]
    if (hour < 12) {
      setGreetingText(greetingTypes[0])
    } else if (hour < 18) {
      setGreetingText(greetingTypes[1])
    } else {
      setGreetingText(greetingTypes[2])
    }
  }, [greetingText, hour])

  const PostsItems = useMemo(() => {
    if (!allPosts) return null

    return allPosts
      .map((item: Post) => {
        return (
          <li key={item._id}>
            <PostForm owner={item.owner} post={item} />
          </li>
        )
      })
      .reverse()
  }, [allPosts])

  return (
    <section className={CnHome()}>
      <Navbar />
      <div className={CnHome('content')}>
        <h1>
          {greetingText}
          {currentUser?.name}
        </h1>
        <ul className={CnHome('items')}>{PostsItems}</ul>
      </div>
    </section>
  )
}
