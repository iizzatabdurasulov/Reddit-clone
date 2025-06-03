import { AiOutlineEdit } from "react-icons/ai";
import React, { useContext, useState } from "react";
import PostItem from "../components/PostItem";
import { useParams } from "react-router-dom";
import Context from "../hooks/Context";

export default function PostDetail() {
  const { id } = useParams();
  const { posts, currentUser } = useContext(Context);
  const post = posts.find((element) => element.id == Number(id));
  console.log(currentUser);
  const [join, setJoin] = useState(false);

  return (
    <div className="mt-[100px] flex gap-[30px]  bg-[#0b1416]">
      <div className="w-[60%]">
        <PostItem item={post} />
      </div>
      <div className="w-[30%] bg-[#04090a] py-[30px] px-[15px] rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-[grey] lg:text-2xl text-xs font-bold">
            {post.userName}
          </h2>
          <button
            className={`p-2 rounded-2xl text-white text-xs font-semibold   ${
              join
                ? "bg-[#2a3236] border border-[#373a3b] hover:border-white "
                : "bg-[#882d04] hover:bg-[#ff4500]  "
            }`}
            onClick={() => setJoin(!join)}
          >
            {join ? "Joined" : "Join"}
          </button>
        </div>
        <div className="flex justify-between items-center mt-[20px]">
          <div className="w-[60%]">
            <h4 className="text-white text-xs font-semibold ">{post.desc}</h4>
            <span className="text-xs text-[grey] ">
              Created {post.createdDate}
            </span>
          </div>
          <h6 className="text-xl text-white font-bold">{post.followers}M</h6>
        </div>
        <div className="mt-[30px] border-b-2 pb-[40px] border-t-2 border-[#373a3b] pt-[20px]">
          <h1 className="uppercase text-2xl text-[grey] font-semibold ">
            user flair
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mt-[15px]">
              <img
                className="w-[20px] h-[20px] object-cover rounded-[50%] "
                src={currentUser.photoURL || "https://via.placeholder.com/20"}
                alt=""
              />
              <h3 className="text-white text-xs font-semibold">
                {currentUser?.displayName || "username"}
              </h3>
            </div>
            <button className="flex mt-[15px] justify-center text-center font-extrabold text-white cursor-pointer hover:bg-[#373a3b] hover:text-white items-center w-[20px] rounded-[50%] h-[20px] ">
              <AiOutlineEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
