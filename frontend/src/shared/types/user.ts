/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  _id: string
  email: string
  name: string
  avatar: string
  location: string
  about: string
  followers: any[]
  followings: any[]
  posts: any[]
}
