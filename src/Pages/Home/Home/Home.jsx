import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Abouts from "../Abouts/Abouts";
import Menu from "../Menu/Menu";
import Calls from "../Calls/Calls";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Abouts></Abouts>
      <Menu></Menu>
      <Calls></Calls>
    </div>
  );
};

export default Home;
