import React from "react";

const menuItems = [
  {
    title: "ROAST DUCK BREAST",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griotine cherry sauce",
    price: "$14.5",
  },
  {
    title: "ESCALOPE DE VEAU",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griotine cherry sauce",
    price: "$14.5",
  },
  {
    title: "FISH PARMENTIER",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griotine cherry sauce",
    price: "$14.5",
  },
  {
    title: "TUNA NIÇOISE",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griotine cherry sauce",
    price: "$14.5",
  },
  {
    title: "CHICKEN AND WALNUT SALAD",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griotine cherry sauce",
    price: "$14.5",
  },
  {
    title: "ROASTED PORK BELLY",
    description:
      "Roasted duck breast (served pink) with gratin potato and a griotine cherry sauce",
    price: "$14.5",
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-10">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-center text-xl text-yellow-600 mb-1">
          ---Check it out---
        </h2>
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
          FROM OUR MENU
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-yellow-600 font-semibold">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
