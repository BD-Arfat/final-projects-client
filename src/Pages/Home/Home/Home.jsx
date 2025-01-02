import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Abouts from "../Abouts/Abouts";
import Menu from "../Menu/Menu";
import Calls from "../Calls/Calls";
import OurMenu from "../OurMenu/OurMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Abouts></Abouts>
      <Menu></Menu>
      <Calls></Calls>
      <OurMenu></OurMenu>
      <Testimonials />
    </div>
  );
};

export default Home;
