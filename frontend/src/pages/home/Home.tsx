import { cn } from '@bem-react/classname'
import { FC, useEffect, useMemo, useState } from 'react'
import { useUser } from 'shared/hooks/useUser'
import { Navbar } from 'widgets/navbar'

import './Home.scss'
import { usePosts } from 'shared/hooks/usePosts'
import { PostForm } from 'entities/post-form'
import { YoutubeFrame } from 'entities/youtube-frame'

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
    return (
      allPosts &&
      allPosts
        .map((item: Record<string, string>, index: number) => {
          return (
            <li key={index}>
              {/* owner={item.owner} */}
              <PostForm owner={currentUser.data} post={item} />
            </li>
          )
        })
        .reverse()
    )
  }, [allPosts, currentUser])

  return (
    <section className={CnHome()}>
      <Navbar />
      <div className={CnHome('content')}>
        <YoutubeFrame />
        <h1>
          {greetingText}
          {currentUser?.data.name}
        </h1>
        <ul className={CnHome('items')}>{PostsItems}</ul>
      </div>
    </section>
  )
}
