import React, { useState, useEffect } from "react";
import bannerImg from "../images/bgBanner.jpg";

const IMAGE_API = "https://image.tmdb.org/t/p/original";

const Banner = ({ imagePath, title, overview }) => {
  console.log(IMAGE_API + imagePath);

  return (
    <>
      <section id="banner">
        {/* <h1>Hello I'm Banner</h1> */}
        <div id="rectangle"></div>
        <img
          src={IMAGE_API + imagePath}
          alt="Movie Banner"
          style={{
            width: "100vw",
            height: "80vh",
            position: "absolute",
            top: "0",
            zIndex: -1000,
          }}
        />
        <h1>{title}</h1>
        <p>{overview}</p>
      </section>
    </>
  );
};

export default Banner;
