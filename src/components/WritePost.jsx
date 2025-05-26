import React, { useContext, useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Context from "../hooks/Context";

export default function WritePost({ selectedCommunity }) {
  const [activeTab, setActiveTab] = useState("text");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const { posts, setPosts, handleAddPost, currentUser } = useContext(Context);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userName: currentUser?.displayName || "username",
      avatar: currentUser?.currentUser?.photoURL || "username",
      date: new Date().toLocaleDateString(),
      post: title,
      like: 0,
      comment: 0,
      share: 0,
      postImage:
        activeTab === "imgVid" && file
          ? URL.createObjectURL(file)
          : activeTab === "link"
          ? link
          : "",
    };

    handleAddPost(newPost);

    setTitle("");
    setText("");
    setLink("");
    setFile(null);
    setActiveTab("text");

    navigate("/");
  };

  return (
    <div>
      <ul className="flex gap-[20px] my-[20px] items-center">
        <li
          onClick={() => setActiveTab("text")}
          className={`lg:text-xl text-xs font-semibold cursor-pointer p-[5px] text-white hover:bg-[#2a3236] ${
            activeTab === "text"
              ? "border-b-[3px] border-b-[blue] pb-[5px]"
              : "border-none"
          }`}
        >
          <Link>Text</Link>
        </li>
        <li
          onClick={() => setActiveTab("imgVid")}
          className={`lg:text-xl text-xs font-semibold cursor-pointer p-[5px] text-white hover:bg-[#2a3236] ${
            activeTab === "imgVid"
              ? "border-b-[3px] border-b-[blue] pb-[5px]"
              : "border-none"
          }`}
        >
          <Link>Image & Video</Link>
        </li>
        <li
          onClick={() => setActiveTab("link")}
          className={`lg:text-xl text-xs font-semibold cursor-pointer p-[5px] text-white hover:bg-[#2a3236] ${
            activeTab === "link"
              ? "border-b-[3px] border-b-[blue] pb-[5px]"
              : "border-none"
          }`}
        >
          <Link>Link</Link>
        </li>
        <li className="text-[grey] text-xs p-2 font-semibold" aria-disabled>
          <Link>Poll</Link>
        </li>
      </ul>

      <form onSubmit={handleSubmit} className="flex flex-col ">
        <input
          required
          className="w-full text-white lg:text-xl text-xs p-3 font-semibold border border-[grey] rounded-2xl outline-none mb-[50px]"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          disabled
          className=" lg:w-[10%] w-[30%] mb-[25px] rounded-2xl bg-[#494141] p-2 text-[grey] text-xs font-semibold "
        >
          Add tags
        </button>
        {activeTab === "text" && (
          <div>
            <textarea
              aria-required
              placeholder="Write your comment"
              className="w-full h-[150px] lg:text-xl text-xs text-white p-3 border border-[grey] rounded-2xl outline-none "
              name=""
              id=""
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        )}

        {activeTab === "imgVid" && (
          <div
            className="text-center w-[full] h-[150px] flex justify-center items-center gap-2  border-[grey] border border-dotted rounded-2xl"
            onClick={() => fileInputRef.current.click()}
          >
            <p className="text-white font-medium lg:text-xl text-xs">
              Drag and Drop or upload media
            </p>
            <button className="text-white cursor-pointer rounded-[50%]  p-[10px] bg-[#2a3236] hover:opacity-[0.5] flex items-center justify-center text-center font-bold text-[20px]">
              <BiCloudUpload />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        )}

        {activeTab === "link" && (
          <input
            required
            className="w-full text-white lg:text-xl text-xs p-3 font-semibold border border-[grey] rounded-2xl outline-none"
            type="text"
            placeholder="Link URL"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        )}
        <div className="flex justify-end mt-[20px] gap-2 items-center">
          <button className=" bg-[blue] text-white hover:opacity-[0.5] font-semibold p-2 cursor-pointer rounded-2xl lg:text-[16px] text-[14px]">
            Save Draft
          </button>
          <button
            type="submit"
            className=" bg-[blue] text-white font-semibold p-2 cursor-pointer rounded-2xl lg:text-[16px] text-[14px] hover:opacity-[0.5]"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
