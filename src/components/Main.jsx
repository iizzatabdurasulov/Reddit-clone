import React from "react";
import CarouselNews from "./CarouselNews";
import Posts from "./Posts";
import PopularCommunities from "./PopularCommunities";

export default function Main() {
  return (
    <div className="w-full pt-[30px] mt-[50px]  xl:px-8">
      <CarouselNews />
      <div className="flex gap-4">
        <div className="flex-1">
          <Posts />
        </div>
        <div className="hidden md:block">
          <PopularCommunities />
        </div>
      </div>
    </div>
  );
}
