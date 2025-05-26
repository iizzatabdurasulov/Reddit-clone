import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Context from "./hooks/Context";
import "swiper/css";
import "swiper/css/navigation";
import SideBar from "./components/SideBar";
import LogIn from "./components/LogIn";
import CreatePost from "./pages/CreatePost";
import { existedPosts } from "./constants/data";
export default function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleLogIn, setToggleLogIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [posts, setNewPosts] = useState(existedPosts);

  const handleAddPost = (newAddedPost) => {
    setNewPosts([newAddedPost, ...posts]);

    
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
          toggleLogIn,
          setToggleLogIn,
          currentUser,
          setCurrentUser,
          openUserMenu,
          setOpenUserMenu,
          posts,
          setNewPosts,
          handleAddPost,
        }}
      >
        <Navbar />
        <LogIn />
        <div className="flex">
          <SideBar />

          {/* Main content */}
          <div className=" xl:w-[80%] w-full p-4 xl:ml-[20%] ml-0 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createPost" element={<CreatePost />} />
            </Routes>
          </div>
        </div>
      </Context.Provider>
    </div>
  );
}
