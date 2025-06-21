// PopularCommunities.jsx
import React from "react";
import { popComunities } from "../constants/data";
import { Link } from "react-router-dom";

export default function PopularCommunities() {
  return (
    <div className="sticky h-auto top-[100px]   w-[300px] xl:w-[350px]">
      <div className="flex flex-col justify-between p-4 bg-black rounded-2xl">
        <div>
          <h1 className="text-white text-2xl font-bold mb-[30px] ">
            Popular Communities
          </h1>
          <ul className="flex flex-col gap-[10px]">
            {popComunities.map((item) => {
              return (
                <li className="flex cursor-pointer gap-2 items-center" key={item?.id}>
                  <img
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-[50%] "
                    src={item?.avatar}
                    alt=""
                  />
                  <h4 className="text-[grey] hover:text-white text-xl">
                    {item?.userName}{" "}
                    <span className="block text-xs">
                      {item?.members} memebers
                    </span>
                  </h4>
                </li>
              );
            })}
          </ul>
          <button className=" mt-[30px] text-[gray] text-xs font-extrabold p-2 rounded-2xl hover:bg-[gray] hover:text-white cursor-pointer">
            See more
          </button>
        </div>
        <div className="flex mt-[100px] flex-wrap gap-3">
          <Link className="text-xs text-white font-semibold">Reddit Rules</Link>
          <Link className="text-xs text-white font-semibold">
            User Agreement
          </Link>
          <p className="text-xs text-white font-semibold">
            Reddit, Inc. © 2025. All rights reserved.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
