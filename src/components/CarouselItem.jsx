import React from "react";

export default function CarouselItem({ item }) {
  return (
    <div
      style={{ backgroundImage: `url(${item.image})` }}
      className="rounded-2xl p-4  bg-cover bg-center flex flex-col justify-end lg:w-[280px] lg:h-[210px] sm:w-[230px]   sm:h-[160px] w-[180px] h-[110px] cursor-pointer"
    >
      <h3 className="text-white font-bold text-[11px] sm:text-[18px] lg:text-[20px]">
        {item.title}
      </h3>
      <p className="text-white text-[11px] font-medium sm:text-sm">
        {item.desc.split(" ").slice(0, 5).join(" ")}
      </p>
      <div className="flex items-center gap-1 mt-1">
        <img
          className="w-[20px] h-[20px]"
          src={item.user.avatar}
          alt={item.user.userName}
        />
        <h4 className="text-white text-[11px] font-semibold sm:text-sm">
          {item.user.userName}
        </h4>
      </div>
    </div>
  );
}
