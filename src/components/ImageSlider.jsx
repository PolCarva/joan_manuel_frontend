import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { stables } from "../constants/stables";

const ImageSlider = ({ images, index, close }) => {
  const handleNavigationClick = (event) => {
    event.stopPropagation(); // Evitar la propagación del evento de clic
  };

  return (
    <div
      className="w-full h-full bg-black/60 fixed z-50 inset-0"
      onClick={() => {
        close();
      }}
    >
      <Swiper
        className="w-full h-1/2 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={index}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((file, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              className="w-full h-full object-contain"
              src={`${stables.MEDIA_URL}/${file.image.filename}`}
              alt={`${file.image.alt}`}
            />
          </SwiperSlide>
        ))}
        <div className="hidden md:block swiper-button-prev text-white" onClick={handleNavigationClick} />
        <div className="hidden md:block swiper-button-next text-white" onClick={handleNavigationClick} />
      </Swiper>
    </div>
  );
};

export default ImageSlider;
