import { FC } from 'react'
import { Login, Register } from 'pages/auth'
import { Routes, Route } from 'react-router-dom'
import { PageNotFound } from 'shared/ui'
import { ProtectedRoute } from 'shared/ui'
import { CreatePost } from 'pages/createPost'

import { Profile } from 'pages/profile'
import { UpdateUser } from 'pages/updateUser'
import { Home } from 'pages/home'

export const RouterProvider: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} /> {/* protected */}
      <Route path="/create-post" element={<CreatePost />} /> {/* sprotected */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/edit-profile" element={<UpdateUser />} />
    </Routes>
  )
}
