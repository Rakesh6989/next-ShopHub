"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function DealBanner() {
  const deals = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1585386959984-a4155223f7c4?auto=format&fit=crop&w=1400&q=80",
      title: "⚡ Mega Electronics Sale",
      desc: "Up to 70% OFF on Best Deals – Limited Time Only!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1400&q=80",
      title: "🔥 Fashion Bonanza",
      desc: "Flat 50% Off on All Clothing Items!",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1515169067865-d378bce190b2?auto=format&fit=crop&w=1400&q=80",
      title: "👜 Bags & Accessories",
      desc: "Buy 1 Get 1 Free on Selected Items!",
    },
  ];

  return (
    <section className="my-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="relative h-[200px] sm:h-[300px] rounded-xl overflow-hidden"
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <div className="relative w-full h-full">
              <img
                src={deal.img}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-2xl sm:text-4xl font-bold">{deal.title}</h2>
                <p className="mt-2 text-sm sm:text-lg">{deal.desc}</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
              </Swiper>
    </section>
  );
}
