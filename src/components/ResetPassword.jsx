import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
export default function ResetPassword({ active, navigate }) {
  return (
    <div
      className={`${
        active === "reset" ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-[100dvh] bg-[#000000b3] flex items-center justify-center z-[12322]`}
    >
      <div className="relative text-center bg-[#1c1f21] text-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
        <button
          onClick={() => navigate(false)}
          className="absolute top-4 right-4 text-2xl cursor-pointer text-white"
          aria-label="Close sign up modal"
        >
          <FaXmark />
        </button>

        <h2 className="text-2xl font-semibold mb-2">Reset your password</h2>

        <p className="text-sm text-gray-400 mb-4">
          Enter your email address or username and we’ll send you a link to
          reset your password
        </p>

        <form className="flex flex-col gap-4 mb-[20px]">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#2c3437] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          <Link
            onClick={() => navigate("reset")}
            to="/login"
            className="text-blue-400 hover:underline"
          >
               Nedd help?
          </Link>

          <button
            type="submit"
            className="w-full mt-[50px] bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-2xl cursor-pointer"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
