import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { carouselNews } from "../constants/data";
import CarouselItem from "./CarouselItem";

export default function CarouselNews() {
  return (
    <Swiper
      spaceBetween={60}
      navigation
      modules={[Navigation]}
      className="mySwiper lg:mt-[30px] mt-[10px] mb-[30px] lg:h-[250px] h-[100px]"
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3.5,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {carouselNews.map((item, index) => (
        <SwiperSlide key={index} className="">
          <CarouselItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
