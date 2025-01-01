import React from "react";
import image from "../../../assets/home/chef-service.jpg";

const Abouts = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="relative w-full h-64 sm:h-72 md:h-96">
          <img
            src={image}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-8 rounded-lg shadow-lg max-w-2xl">
            <h1 className="text-3xl font-bold text-center text-white mb-4">
              Bistro Boss
            </h1>
            <p className="text-gray-200 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
