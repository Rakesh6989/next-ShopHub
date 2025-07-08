"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1400&q=80",
    title: "Big Sale 70% Off",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80",
    title: "New Arrivals",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    title: "Shop the Trend",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[300px] sm:h-[500px] relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-xl sm:text-4xl font-bold text-center drop-shadow-md">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrows */}
      <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer">
        ⬅️
      </div>
      <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer">
        ➡️
      </div>
    </div>
  );
}
