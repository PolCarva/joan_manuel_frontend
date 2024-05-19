import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { stables } from "../constants/stables";
import { Keyboard } from "swiper/modules";

const ImageSlider = ({ images, index, close }) => {

  return (
    <div
      className="w-full h-full bg-black/60 fixed z-50 inset-0"
      onClick={() => {
        close();
      }}
    >
      <Swiper
        className="w-full h-full absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={index}
        keyboard={{
          enabled: true,
        }}
        
        modules={[Keyboard]}

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

      </Swiper>
    </div>
  );
};

export default ImageSlider;
