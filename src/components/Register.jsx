import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Context from "../hooks/Context";
import googleIcon from "../assets/google-color-icon.svg";
import appleIcon from "../assets/apple-icon.svg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../auth/auth";

export default function Register({ active, navigate }) {
  const { toggleSignUp, setToggleSignUp, setCurrentUser } = useContext(Context);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user);

      setCurrentUser(user);
      setToggleSignUp(false);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div
      className={`${
        active === "sign" ? "block" : "hidden"
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

        <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>

        <p className="text-sm text-gray-400 mb-4">
          By continuing, you agree to our{" "}
          <Link className="text-blue-400" to="/user-agreement">
            User Agreement
          </Link>{" "}
          and acknowledge that you understand the{" "}
          <Link className="text-blue-400" to="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full relative hover:bg-[#7cb7ea] bg-white text-black py-2 rounded-2xl cursor-pointer mb-2 flex items-center justify-center"
        >
          <img
            src={googleIcon}
            className="w-[20px] h-[20px] absolute left-4"
            alt="Google icon"
          />
          Continue with Google
        </button>

        <button className="w-full relative bg-white text-black rounded-2xl cursor-pointer py-2 mb-6 hover:bg-[#7cb7ea] flex items-center justify-center">
          <img
            src={appleIcon}
            className="w-[20px] h-[20px] absolute left-4"
            alt="Apple icon"
          />
          Continue with Apple
        </button>

        <div className="flex items-center mb-4">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        <form className="flex flex-col gap-4 mb-[20px]">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#2c3437] text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <h5 className="text-sm text-left">
            Already a redditor?{" "}
            <Link
              onClick={() => close("login")}
              to="/login"
              className="text-blue-400 hover:underline"
            >
              Log In
            </Link>
          </h5>
          <button
            type="submit"
            className="w-full mt-[50px] bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-2xl cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
