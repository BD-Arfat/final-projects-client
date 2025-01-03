import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
        className="my-5"
      >
        <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center text-white px-4">
            <h1 className="text-5xl font-bold uppercase border-2 border-blue-500 p-4 inline-block">
              Our Menu
            </h1>
            <p className="text-lg mt-4">Would you like to try a dish?</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
