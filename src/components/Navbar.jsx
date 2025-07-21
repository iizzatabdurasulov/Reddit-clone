import { BiUserCircle, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegCommentDots, FaBars, FaSearch } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Context from "../hooks/Context";
import OpenMenu from "./OpenMenu";
import LogIn from "./LogIn";
import ResetPassword from "./ResetPassword";
import Register from "./Register";

export default function Navbar() {
  const [authModal, setAuthModal] = useState(false);
  const {
    toggleSidebar,
    setToggleSidebar,
    currentUser,
    openUserMenu,
    setOpenUserMenu,
  } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = toggleSidebar ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [openUserMenu, toggleSidebar]);

  const handleNavigateToCreatePost = () => {
    navigate("/createPost");
  };

  return (
    <nav
      className="fixed w-full z-[1111] flex lg:px-6 px-1 py-3 justify-between border-b border-[#373a3b] items-center
                 bg-[#0e1113] text-white"
    >
      <Link className="flex gap-[5px] items-center" to="/">
        <button
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="text-white  font-bold lg:text-2xl sm:text-xs block xl:hidden"
        >
          <FaBars />
        </button>
        <img src={logo} alt="Reddit logo" />
        <span className="font-bold text-xl hidden xl:block text-white ">
          reddit
        </span>
      </Link>

      <form className="relative group lg:w-[50%] w-[30%] m-auto">
        <FaSearch className="absolute top-[35%] left-[10px] text-gray-400 group-focus-within:hidden" />
        <input
          className="w-full outline-none bg-[#2a3236] 
                     lg:px-5 px-2 lg:pl-[40px] pl-[10px] lg:py-3 py-2 
                     rounded-2xl placeholder:font-light 
                      text-white  placeholder:text-white 
                     lg:text-xl text-xs"
          type="text"
          placeholder="Search"
        />
      </form>

      <div className="flex sm:gap-4 gap-1 items-center">
        {currentUser ? (
          <div className="flex items-center gap-0">
            <button className="hidden md:block primary-button">
              <RiAdvertisementLine />
            </button>
            <button className="lg:text-2xl text-xs lg:font-bold cursor-pointer font-medium text-white   hover:bg-[#2a3236] lg:p-3 p-[5px] rounded-2xl">
              <FaRegCommentDots />
            </button>
            <button
              onClick={handleNavigateToCreatePost}
              className="flex items-center gap-1 lg:text-2xl text-xs lg:font-bold cursor-pointer font-medium text-white  hover:bg-[#2a3236] lg:p-3 p-[5px] rounded-2xl"
            >
              <AiOutlinePlus /> Create
            </button>
            <button className="primary-button">
              <IoMdNotificationsOutline />
            </button>
            <div className="relative">
              <button
                onClick={() => setOpenUserMenu(!openUserMenu)}
                className="primary-button"
              >
                <img
                  src={currentUser?.photoURL || "username"}
                  className="w-[20px] h-[20px] rounded-full"
                  alt="user"
                />
              </button>
              <OpenMenu />
            </div>
          </div>
        ) : (
          <>
            <Link
              to="https://play.google.com/store/apps/details?id=com.reddit.frontpage&hl=en"
              className="hidden sm:flex items-center gap-[5px] lg:text-xl text-xs lg:font-bold font-medium text-white   bg-[#2a3236] lg:p-3 p-[5px] rounded-2xl cursor-pointer"
            >
              <BsQrCodeScan />
              Get App
            </Link>

            <button
              onClick={() => setAuthModal("login")}
              className="flex items-center gap-[5px] lg:text-xl text-xs lg:font-bold font-light text-white bg-[#d93900] lg:p-3 p-[5px] px-3 cursor-pointer rounded-2xl"
            >
              Log In
            </button>

            <button
              className="flex items-center gap-[5px] lg:text-xl sm:text-xs lg:font-bold cursor-pointer sm:font-medium 
                         text-white  hover:bg-[#2a3236] lg:p-3 p-[5px] rounded-2xl"
            >
              <BiDotsHorizontalRounded />
            </button>
          </>
        )}
      </div>

      <LogIn active={authModal} navigate={setAuthModal} />
      <Register active={authModal} navigate={setAuthModal} />
      <ResetPassword active={authModal} navigate={setAuthModal} />
    </nav>
  );
}
