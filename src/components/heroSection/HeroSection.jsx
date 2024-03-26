// eslint-disable-next-line no-unused-vars
import React from "react";
import Hinh_banner_2 from "../../assets/Hinh_banner_2.png";
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="banner">
      <div className="flex justify-center">
        <img width={1520} src={Hinh_banner_2} alt="Banner_MLP" />
      </div>
    </div>
  );
}

export default HeroSection;
