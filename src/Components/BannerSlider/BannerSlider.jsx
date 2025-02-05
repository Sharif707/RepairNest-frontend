import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

const Banner = ({ bannerData }) => {
  const [bannerSlider, setbannerSlider] = useState(bannerData);
 
  return (
    <div className="w-full h-[500px] relative z-30">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {bannerSlider.length > 0 &&
          bannerSlider.map((slide) => (
            <SwiperSlide key={slide._id}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute hidden md:block right-16 bottom-20 font-medium text-lg text-white p-4 z-40 rounded-full bg-[#099b4a]">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Get Free Consultancy
        </button>
      </div>

      <div className="p-5 rounded-xl hidden md:block absolute md:left-20 md:top-28 bg-light-white text-[#3D3C3C] z-40 md:max-w-[300px] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 w-11/12 mx-auto">
        <h2 className="text-xl">
          One Stop Repair Renovation & Interior Solution in Bangladesh
        </h2>
        <p className="text-lg my-3">
          Let Our Professional Teams renovate and design your dream place today
        </p>
        <button
          className="py-3 px-8 text-white font-bold text-lg rounded-lg bg-[#343995]"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Request Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Banner;
