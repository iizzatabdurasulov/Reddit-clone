import {
  BiDownvote,
  BiShare,
  BiAward,
  BiUpvote,
  BiDotsHorizontal,
} from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostItem({ item }) {
  const [like, setLike] = useState(item.like);
  const [vote, setVote] = useState(null);

  const navigate = useNavigate();

  const handleGoToPostDetail = () => {
    navigate(`/posts/${item.id}`);
  };

  const handleUpvote = () => {
    if (vote === "up") {
      setLike(like - 1);
      setVote(null);
    } else {
      setLike(like + 1);
      setVote("up");
      if (vote === "down") setLike(like + 2);
    }
  };

  const handleDownvote = () => {
    if (vote === "down") {
      setLike(like + 1);
      setVote(null);
    } else {
      setLike(like - 1);
      setVote("down");
      if (vote === "up") setLike(like - 2);
    }
  };

  return (
    <div
      onClick={handleGoToPostDetail}
      className="p-3 rounded-2xl cursor-pointer hover:bg-[#2a3236] mb-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img
            className="w-5 h-5"
            src={item.avatar}
            alt={`${item.userName}'s avatar`}
          />
          <h5 className="text-white font-semibold text-xs">{item.userName}</h5>
          <span className="text-white font-semibold text-xs ml-2.5">
            {item.date}
          </span>
        </div>
        <button className="text-2xl text-white">
          <BiDotsHorizontal />
        </button>
      </div>

      <h2 className="text-white lg:text-2xl text-sm font-bold my-2.5">
        {item.post}
      </h2>
      {item.postImage && (
        <img
          className="w-full rounded-lg"
          src={item.postImage}
          alt={item.postImageAlt || "Post image"}
        />
      )}

      <div className="flex gap-3 mt-5">
        <div
          className={`flex gap-1 items-center rounded-2xl p-1 ${
            vote === "up"
              ? "bg-[#d93900]"
              : vote === "down"
              ? "bg-[#6a5cff]"
              : "bg-[#3e4a50]"
          }`}
        >
          <button
            onClick={handleUpvote}
            className="text-2xl cursor-pointer text-white"
          >
            <BiUpvote />
          </button>
          <span className="text-white text-xl font-bold">{like}</span>
          <button
            onClick={handleDownvote}
            className="text-2xl cursor-pointer text-white"
          >
            <BiDownvote />
          </button>
        </div>

        <button
          onClick={handleGoToPostDetail}
          className="flex gap-1 cursor-pointer items-center justify-center text-xl text-white bg-[#3e4a50] rounded-2xl p-1 hover:opacity-50"
        >
          <FaRegComment />
          <span className="text-xl font-bold">{item.comment}</span>
        </button>

        <button className="flex cursor-pointer gap-1 items-center justify-center text-xl text-white bg-[#3e4a50] rounded-2xl p-1 hover:opacity-50">
          <BiAward />
        </button>

        <button className="flex cursor-pointer gap-1 items-center justify-center text-xl text-white bg-[#3e4a50] rounded-2xl p-1 hover:opacity-50">
          <BiShare />
          <span className="text-xl font-bold">{item.share}</span>
        </button>
      </div>
    </div>
  );
}
