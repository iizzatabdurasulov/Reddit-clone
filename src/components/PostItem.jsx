import {
  BiDownvote,
  BiShare,
  BiAward,
  BiUpvote,
  BiDotsHorizontal,
} from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import React, { useState } from "react";

export default function PostItem({ item }) {
  const [like, setLike] = useState(item.like);
  const [vote, setVote] = useState(null);

  const handleUpvote = () => {
    if (vote === "up") {
      setLike((prev) => prev - 1);
      setVote(null);
    } else if (vote === "down") {
      setLike((prev) => prev + 2);
      setVote("up");
    } else {
      setLike((prev) => prev + 1);
      setVote("up");
    }
  };

  const handleDownvote = () => {
    if (vote === "down") {
      setLike((prev) => prev + 1);
      setVote(null);
    } else if (vote === "up") {
      setLike((prev) => prev - 1);
      setVote("down");
    } 
  };

  return (
    <div className="p-3 rounded-2xl hover:bg-[#2a3236] mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img className="w-[20px] h-[20px]" src={item.avatar} alt="" />
          <h5 className="text-white font-semibold text-xs">{item.userName}</h5>
          <span className="text-white font-semibold text-xs ml-[10px]">
            {item.date}
          </span>
        </div>
        <button className="text-2xl text-white font-bold">
          <BiDotsHorizontal />
        </button>
      </div>

      <h2 className="text-white lg:text-2xl text-xs font-bold my-[10px] ">
        {item.post}
      </h2>
      <img className="" src={item.postImage} alt="" />

      <div className="flex gap-[15px] mt-[20px]">
        <div
          className={`flex gap-1 items-center bg-[#3e4a50] rounded-2xl p-1  ${
            vote === "up" ? "bg-[#d93900]" : "bg-[#3e4a50]"
          } ${vote === "down" ? "bg-[#6a5cff]" : "bg-[#3e4a50]"}`}
        >
          <button
            onClick={handleUpvote}
            className={`text-2xl font-extrabold text-white`}
          >
            <BiUpvote />
          </button>
          <span className="text-white text-xl font-bold">{like}</span>
          <button
            onClick={handleDownvote}
            className={`text-2xl font-extrabold text-white`}
          >
            <BiDownvote />
          </button>
        </div>

        <button className="text-white flex hover:opacity-[0.5] gap-1 items-center justify-center text-xl font-bold bg-[#3e4a50] rounded-2xl p-1">
          <FaRegComment />
          <span className="text-white text-xl font-bold">{item.comment}</span>
        </button>

        <button className="text-white flex gap-1 hover:opacity-[0.5] items-center justify-center text-xl font-bold bg-[#3e4a50] rounded-2xl p-1">
          <BiAward />
        </button>

        <button className="text-white flex gap-1 hover:opacity-[0.5] items-center justify-center text-xl font-bold bg-[#3e4a50] rounded-2xl p-1">
          <BiShare />
          <span className="text-white text-xl font-bold">{item.share}</span>
        </button>
      </div>
    </div>
  );
}
