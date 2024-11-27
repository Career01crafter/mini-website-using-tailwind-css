"use client";

import React, { useState } from "react";

export default function Hero() {
  const [showVision, setShowVision] = useState(false);

  return (
    <div className="flex flex-col justify-center pt-2 px-4 sm:px-6 lg:px-8 p-12 mt-0 bg-custom-bg bg-center bg-cover text-white h-screen bg-black bg-opacity-50">
      <h1 className="text-4xl text-left sm:text-3xl md:text-4xl lg:text-5xl">
        Welcome to! <br />{" "}
        <i className="text-6xl text-blue-800 font-black">Shoe Galleria</i>
      </h1>
      <p className="text-3xl pt-4 text-left sm:text-2xl md:text-3xl lg:text-3xl">
        Exceptional Footwear for Exceptional Individuals
      </p>

      <button
        className="mt-6 py-2 px-4 bg-blue-800 text-white rounded-lg focus:outline-none sm:hidden"
        onClick={() => setShowVision(!showVision)}
      >
        {showVision ? "Hide Vision" : "Show Vision"}
      </button>

      <div className={`${showVision ? "block" : "hidden"} sm:block`}>
        <h2 className="text-4xl text-left font-bold pt-8 pb-4 text-blue-800 sm:text-3xl md:text-4xl">
          Our Vision...!
        </h2>
        <p className="text-xl text-left sm:text-base md:text-xl lg:text-xl pb:10">
          {" "}
          We envision a future where everyone has access to footwear that
          feels as good as it looks. Whether you`re <br /> walking to work, running
          errands, or exploring the outdoors, our shoes are designed to
          be your perfect companion.
        </p>
      </div>
    </div>
  );
}
