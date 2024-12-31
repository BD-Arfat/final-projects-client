import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center">
        <p className="text-yellow-500 italic text-sm">
          ---From 11:00am to 10:00pm---
        </p>
        <h2 className="text-2xl font-bold mt-2">ORDER ONLINE</h2>
      </div>
      <div className="mt-6 w-11/12 max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-10" // ডটের জন্য নিচে জায়গা রাখা
        >
          {/* SwiperSlide 1 */}
          <SwiperSlide>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
              <img
                src={image1}
                alt="Salads"
                className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 text-center text-lg font-semibold">
                SALADS
              </div>
            </div>
          </SwiperSlide>

          {/* SwiperSlide 2 */}
          <SwiperSlide>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
              <img
                src={image3}
                alt="Soups"
                className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 text-center text-lg font-semibold">
                SOUPS
              </div>
            </div>
          </SwiperSlide>

          {/* SwiperSlide 3 */}
          <SwiperSlide>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
              <img
                src={image2}
                alt="Pizzas"
                className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 text-center text-lg font-semibold">
                PIZZAS
              </div>
            </div>
          </SwiperSlide>

          {/* SwiperSlide 4 */}
          <SwiperSlide>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
              <img
                src={image4}
                alt="Desserts"
                className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 text-center text-lg font-semibold">
                DESSERTS
              </div>
            </div>
          </SwiperSlide>

          {/* SwiperSlide 5 */}
          <SwiperSlide>
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
              <img
                src={image5}
                alt="Soups"
                className="w-full h-68 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-2 text-center text-lg font-semibold">
                SOUPS
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination mt-4"></div>{" "}
        {/* ডটসের কাস্টম পজিশন */}
      </div>
    </div>
  );
};

export default Category;
