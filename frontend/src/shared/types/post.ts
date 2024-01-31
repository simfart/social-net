import { User } from './user'

export interface Post {
  _id: string
  owner: User
  likes: []
  comments: []
  createdAt: string
  video: string
  description: string
  image: string
}
