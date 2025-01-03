import React from "react";
import Cover from "../../../Sheard/Cover/Cover";
import menuImage1 from "../../../assets/menu/banner3.jpg";
import Menu from "../../Home/Menu/Menu";

const MenuPage = () => {
  return (
    <div>
      <Cover img={menuImage1}></Cover>
      <Menu></Menu>
      <Cover img={menuImage1}></Cover>
      <Menu></Menu>
    </div>
  );
};

export default MenuPage;
