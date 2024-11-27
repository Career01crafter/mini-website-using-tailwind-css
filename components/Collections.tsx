"use client";

import React from "react";
import Image from "next/image";

export default function Collections() {
  const images = [
    { src: "/image1.jpg", alt: "White Sneakers ", price: "$49.99" },
    { src: "/image2.webp", alt: "Black & White Long Shoes", price: "$59.99" },
    { src: "/image3.webp", alt: "Emerald  Comfort Shoes", price: "$39.99" },
    { src: "/image4.webp", alt: "College Shoes", price: "$69.99" },
    { src: "/image5.jpg", alt: "Sports Shoes", price: "$79.99" },
    { src: "/image6.jpg", alt: "Lightgreen Footwear", price: "$89.99" },
    { src: "/image7.avif", alt: "Nike Sneakers", price: "$99.99" },
    { src: "/image8.webp", alt: "Elegent Footwear", price: "$29.99" },
    { src: "/image9.avif", alt: "Gray Sport Shoes", price: "$19.99" },
    { src: "/image10.jpg", alt: "Running Shoes", price: "$39.99" },
    { src: "/image11.jfif", alt: "Sneakers In pink", price: "$49.99" },
    { src: "/image12.jpg", alt: "Comfort Shoes", price: "$59.99" },
  ];

  return (
    <div id="collections" className="p-12 mt-0 bg-sky-500">
      <h1 className="text-blue-800 text-center font-bold text-5xl mb-8">
        Our Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="card border-2 border-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-white">{image.alt}</h2>
              <p className="text-gray-800 font-bold">{image.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}