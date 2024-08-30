// src/app/components/SlideHome.tsx

"use client";

import { useEffect, useState } from "react";

export function SlideHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const backgrounds = [
    {
      desktop: "/assets/bg-home/6.webp",
      mobile: "/assets/bg-home/small-3.webp",
    },
    {
      desktop: "/assets/bg-home/7.webp",
      mobile: "/assets/bg-home/small-1.webp",
    },
    {
      desktop: "/assets/bg-home/8.webp",
      mobile: "/assets/bg-home/small-2.webp",
    },
    {
      desktop: "/assets/bg-home/9.webp",
      mobile: "/assets/bg-home/small-4.webp",
    },
    {
      desktop: "/assets/bg-home/10.webp",
      mobile: "/assets/bg-home/small-5.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 50000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <main className="relative w-full h-[550px] sm:h-[580px] overflow-hidden">
      <div
        className="absolute w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className="w-full h-full bg-cover bg-center flex-shrink-0 justify-center items-center"
          >
            <div
              className="flex sm:hidden bg-cover bg-center flex-shrink-0 w-full h-full"
              style={{ backgroundImage: `url(${bg.mobile})` }}
            ></div>
            <div
              className="hidden sm:flex bg-cover bg-center flex-shrink-0  w-full h-full"
              style={{ backgroundImage: `url(${bg.desktop})` }}
            ></div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 rotate-180"
        onClick={handlePrevious}
        aria-label="Previous Slide"
      >
        ▶
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        ▶
      </button>
    </main>
  );
}
