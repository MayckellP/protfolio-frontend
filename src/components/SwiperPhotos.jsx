import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

export default function App() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiperInstance && swiperInstance.slideNext) {
        swiperInstance.slideNext();
      }
    }, 1); // Cambia el valor según tus preferencias de tiempo (en milisegundos)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Swiper
        ref={swiperRef}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
        loop={true}
        speed={2000} // Ajusta la velocidad de transición en milisegundos
      >
        <SwiperSlide>
          <img src="../image/Profile.JPG" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/Profile_2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../image/Profile_3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
