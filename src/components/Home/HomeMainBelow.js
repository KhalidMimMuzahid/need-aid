import React from "react";
import Contact from "./HomeMain/Contact";
import DonateCard from "./HomeMain/DonateCard";
import Gallary from "./HomeMain/Gallary";
const HomeMainBelow = () => {
  return (
    <div className="">
      <DonateCard />
      <Gallary></Gallary>
      <Contact />
    </div>
  );
};

export default HomeMainBelow;
