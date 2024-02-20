import { FC, PropsWithChildren } from 'react'
import { Post } from 'shared/types'
interface IPost extends PropsWithChildren {
  post: Post
}

export const PostView = ({ post }: IPost) => {
  console.log(post)
  return <div>ffffffffffff</div>
}
