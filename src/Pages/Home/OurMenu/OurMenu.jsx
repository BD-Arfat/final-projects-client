import React from "react";
import image from "../../../assets/home/chef-service.jpg";
// import smallImage from "../../../assets/home/menu-item.jpg";

const MenuHighlight = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-6xl transform hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-64 sm:h-72 md:h-96">
          <img
            src={image}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <p className="text-yellow-500 text-sm sm:text-md mt-4 sm:mt-6">
            ---Check it out---
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-2">
            FROM OUR MENU
          </h2>
          <div className="relative mt-8 sm:mt-10">
            <img
              src={image}
              alt="Menu Item"
              className="w-64 sm:w-72 md:w-80 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-0 left-full ml-4 flex flex-col items-start bg-black bg-opacity-60 p-4 rounded-lg w-64 sm:w-72 md:w-80 shadow-lg transform hover:translate-x-2 transition-transform duration-500">
              <p className="text-sm sm:text-md">March 20, 2023</p>
              <h3 className="text-lg sm:text-xl font-bold my-1">
                WHERE CAN I GET SOME?
              </h3>
              <p className="text-sm sm:text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequuntur consequatur omnis ullam maxime tenetur.
              </p>
              <button className="bg-yellow-500 text-black px-4 py-2 mt-4 rounded-full font-semibold transform hover:bg-yellow-600 transition-colors duration-300">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHighlight;
