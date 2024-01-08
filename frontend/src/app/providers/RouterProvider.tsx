import { FC } from "react";
import { Login, Register } from "features/auth";
import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "shared/ui";
import { ProtectedRoute } from "shared/ui";

import { Profile } from "pages/profile";

export const RouterProvider: FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<ProtectedRoute element={<Profile />} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
