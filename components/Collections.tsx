"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Collections() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/image1.jpg",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.avif",
    "/image8.webp",
    "/image9.avif",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div id="collections" className="p-12 mt-0 h-screen bg-sky-500">
      <h1 className="text-blue-800 text-center font-bold text-5xl mb-8">
        Our Collections
      </h1>

      <div className="carousel relative m-20 flex justify-center items-center">
        <div
          className="carousel-content flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0 w-full p-2 m-2"
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={400}
                className="object-cover mx-auto transform transition-transform duration-[2000ms] ease-linear hover:rotate-[360deg]"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-button prev-button absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-800 text-white p-2"
          onClick={prevImage}
        >
          &#60; Prev
        </button>
        <button
          className="carousel-button next-button absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-800 text-white p-2"
          onClick={nextImage}
        >
          Next &#62;
        </button>
      </div>
    </div>
  );
}
