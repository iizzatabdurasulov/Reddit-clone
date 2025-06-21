import { BiSun } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import React, { useContext } from "react";
import Context from "../hooks/Context";
import { FaUser } from "react-icons/fa6";
import { auth } from "../auth/auth";

export default function OpenMenu() {
  const {
    openUserMenu,
    setOpenUserMenu,
    mode,
    setMode,
    currentUser,
    setCurrentUser,
  } = useContext(Context);
  const handleLogout = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("currentUser");
      setCurrentUser(null);
    });
  };
  return (
    <ul
      className={`${
        openUserMenu ? "absolute top-full mt-2 right-0 z-[11111]" : "hidden"
      } bg-[#181c1f] h-[100vh] lg:w-[250px] w-[150px]  rounded-xl flex flex-col gap-[20px] lg:p-4 p-2`}
    >
      <li className="flex items-center cursor-pointer gap-2 p-2 text-[gray] hover:text-white">
        <img
          className="w-[20px] h-[20px] rounded-[50%]"
          src={currentUser.photoURL}
          alt=""
        />
        <h4 className="lg:text-[14px] text-[11px] font-semibold">
          View Profile
          <span className="block lg:text-[12px] text-[8px] font-medium">
            u/{currentUser?.displayName || "username"}
          </span>
        </h4>
      </li>
      <li className="flex items-center cursor-pointer gap-2 text-[gray] hover:text-white">
        <FiSettings />
        <h4 className="  lg:text-[14px] text-[11px] font-semibold">Settings</h4>
      </li>
      <li
        onClick={handleLogout}
        className="flex items-center cursor-pointer gap-2 p-2 text-[gray] hover:text-white"
      >
        <IoIosLogOut />
        <h4 className=" lg:text-[14px] text-[11px] font-semibold">Log Out</h4>
      </li>
      <li
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        className="flex items-center cursor-pointer gap-2 p-2 text-[gray] hover:text-white"
      >
        <BiSun />
        <h4 className="lg:text-[14px] text-[11px] font-semibold">
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </h4>
      </li>
    </ul>
  );
}
