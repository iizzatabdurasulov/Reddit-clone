import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./hooks/Context";
import "swiper/css";
import "swiper/css/navigation";
import SideBar from "./components/SideBar";
import SignUp from "./components/signUp";
import LogIn from "./components/LogIn";
import ScrollToTop from "./utilits/ScrollTop";
import Routers from "./routes/Routers";

export default function App() {

  return (
    <ContextProvider>
      <ScrollToTop />
      <Navbar />
      <LogIn />
      <SignUp />
      <div className="flex">
        <SideBar />
        <div className=" xl:w-[80%] w-full p-4 xl:ml-[20%] ml-0 transition-all duration-300">
          <Routers />
        </div>
      </div>
    </ContextProvider>
  );
}
