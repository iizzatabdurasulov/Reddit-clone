import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetail from "../pages/PostDetail";
import Popular from "../pages/Popular";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
}
