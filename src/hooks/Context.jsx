import React, { createContext, useState, useEffect } from "react";
import { existedPosts } from "../constants/data";

const Context = createContext();

export function ContextProvider({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleLogIn, setToggleLogIn] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [posts, setNewPosts] = useState(existedPosts);
  const [mode, setMode] = useState("light");

  // Load saved theme or system preference on first load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setMode(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setMode(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  // Apply theme changes to document
  useEffect(() => {
    document.documentElement.classList.remove(mode === "dark" ? "light" : "dark");
    document.documentElement.classList.add(mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAddPost = (newAddedPost) => {
    setNewPosts((prevPosts) => [newAddedPost, ...prevPosts]);
  };

  return (
    <Context.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        toggleLogIn,
        setToggleLogIn,
        toggleSignUp,
        setToggleSignUp,
        currentUser,
        setCurrentUser,
        openUserMenu,
        setOpenUserMenu,
        posts,
        setNewPosts,
        handleAddPost,
        mode,
        setMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
