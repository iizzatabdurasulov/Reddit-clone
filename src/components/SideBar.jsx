import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { sidebarData } from "../constants/data";
import Context from "../hooks/Context";

export default function SideBar() {
  const [openTopics, setOpenTopics] = useState(false);
  const [openResources, setOpenResources] = useState(false);
  const { toggleSidebar, setToggleSidebar } = useContext(Context);

  useEffect(() => {
    if (toggleSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleSidebar]);

  return (
    <aside
      className={`
       custom-scrollbar lg:p-[24px] p-[12px] mt-[50px] h-[100vh] w-[45%] xl:w-[20%]
    flex flex-col gap-3 border-r-2 border-[#373a3b] bg-[#0e1113]
    transition-transform duration-300 fixed top-[0px] left-0 z-50 
    ${toggleSidebar ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0
    ${openTopics || openResources ? "overflow-y-auto" : ""}
  `}
    >
      <h3 className="lg:text-2xl text-[16px] text-white font-bold flex lg:gap-2  gap-1 items-center hover:bg-[#2a3236] lg:p-[24px] p-[12px] rounded-2xl">
        <BiHome /> Home
      </h3>
      <h3 className="lg:text-2xl text-[16px] text-white font-bold flex lg:gap-2  gap-1 items-center hover:bg-[#2a3236] lg:p-[24px] p-[12px] rounded-2xl">
        <BsFillArrowDownLeftCircleFill />
        Popular
      </h3>

      <h4
        onClick={() => setOpenTopics(!openTopics)}
        className="border-t-1 cursor-pointer  lg:text-2xl text-[16px] font-semibold text-[#484b4c] flex justify-between hover:bg-[#2a3236] lg:p-[24px] p-12px lg:pt-[30px] pt-[15px] hover:rounded-2xl border-[#373a3b]"
      >
        Topics{" "}
        <span>
          <FaAngleDown />
        </span>
      </h4>
      <ul className={openTopics ? "flex flex-col gap-4" : "hidden"}>
        {sidebarData.map(({ id, title, Icon }) => {
          return (
            <li
              className="flex justify-between items-center hover:bg-[#2a3236] p-[12px] lg:p-[24px] rounded-2xl "
              key={id}
            >
              <h3 className="flex lg:gap-2 gap-1 items-center text-white text-[14px] lg:text-xl font-medium ">
                <Icon className="text-xl lg:text-2xl" /> {title}
              </h3>
              <span className="text-white lg:text-2xl text-xl font-medium">
                <FaAngleDown />
              </span>
            </li>
          );
        })}
      </ul>
      <h4
        onClick={() => setOpenResources(!openResources)}
        className="border-t-1 cursor-pointer  lg:text-2xl text-[16px] font-semibold text-[#484b4c] flex justify-between hover:bg-[#2a3236] lg:p-[24px] p-12px lg:pt-[30px] pt-[15px] hover:rounded-2xl border-[#373a3b]"
      >
        Resources{" "}
        <span>
          <FaAngleDown />
        </span>
      </h4>
      <ul className={openResources ? "flex flex-col gap-4" : "hidden"}>
        {sidebarData.map(({ id, title, Icon }) => {
          return (
            <li
              className="flex justify-between items-center hover:bg-[#2a3236] p-[24px] rounded-2xl "
              key={id}
            >
              <h3 className="flex gap-2 items-center-center text-white lg:text-2xl text-l font-medium ">
                <Icon className="lg:text-2xl text-l" /> {title}
              </h3>
              <span className="text-white lg:text-2xl text-l font-medium">
                <FaAngleDown />
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
