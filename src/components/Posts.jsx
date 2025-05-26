import React, { useContext } from "react";
import PostItem from "./PostItem";
import Context from "../hooks/Context";

export default function Posts() {
  const { posts, setPosts, handleAddPost } = useContext(Context);

  return (
    <div className="lg:w-[700px] w-[full] ">
      {posts.map((item, index) => {
        return <PostItem key={index} item={item} />;
      })}
    </div>
  );
}
