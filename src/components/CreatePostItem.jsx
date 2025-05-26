import { BiChevronDown } from "react-icons/bi";
import React, { useContext, useState } from "react";
import { existedPosts, popComunities } from "../constants/data";
import { Link } from "react-router-dom";
import WritePost from "./WritePost";
import Context from "../hooks/Context";
export default function CreatePostItem() {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [open, setOpen] = useState(false);
  const { posts, setPosts, handleAddPost } = useContext(Context);

  return (
    <div className="mt-[100px] lg:ml-[40px]  lg:w-[60%] w-full ">
      <div className="flex justify-between items-center">
        <h3 className="lg:text-2xl text-xl font-bold text-[grey]">
          Create Post
        </h3>
        <button className="primary-button !text-[15px]">Drafts</button>
      </div>

      <div className="relative lg:w-1/3 w-1/2 mt-4">
        <div
          onClick={() => setOpen(!open)}
          className="bg-[#2a3236] p-2 rounded-2xl cursor-pointer flex items-center gap-2 text-white"
        >
          {selectedCommunity ? (
            <>
              <img src={selectedCommunity.avatar} className="w-6 h-6" alt="" />
              <span>{selectedCommunity.userName}</span>
            </>
          ) : (
            <span className=" flex lg:gap-[10px] gap-[5px] justify-center items-center lg:text-xl text-xs  font-bold">
              Select Community <BiChevronDown className="text-right" />{" "}
            </span>
          )}
        </div>

        {open && (
          <div className="absolute z-10 mt-2 w-full bg-[#2a3236] rounded-2xl shadow-lg max-h-[200px] overflow-y-auto">
            {popComunities.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 items-center p-2 hover:bg-[#3a3f44] cursor-pointer"
                onClick={() => {
                  setSelectedCommunity(item);
                  setOpen(false);
                }}
              >
                <img src={item.avatar} className="w-6 h-6" alt="" />
                <div>
                  <p className="text-white">{item.userName}</p>
                  <span className="text-xs text-gray-300">
                    {item.members} members
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <WritePost
        selectedCommunity={selectedCommunity}
      />

      <footer className="mt-[100px] mb-[30px]">
        <div className="flex justify-center gap-2  items-center">
          <Link className="text-[grey] text-xs  ">Reddit Rules</Link>
          <Link className="text-[grey] text-xs  ">Privacy Policy</Link>
          <Link className="text-[grey] text-xs  ">User Agreement</Link>
          <p className="text-[grey] text-xs hidden lg:block  ">
            Reddit, Inc. © 2025. All rights reserved.
          </p>
        </div>
        <p className="text-[grey] text-xs text-center mt-[10px] lg:hidden  ">
          Reddit, Inc. © 2025. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
