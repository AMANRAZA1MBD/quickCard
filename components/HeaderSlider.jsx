import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const sliderData = [
  {
    id: 1,
    title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    offer: "Limited Time Offer 30% Off",
    buttonText1: "Buy now",
    buttonText2: "Find more",
    imgSrc: assets.header_headphone_image,
  },
  {
    id: 2,
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    offer: "Hurry up only few lefts!",
    buttonText1: "Shop Now",
    buttonText2: "Explore Deals",
    imgSrc: assets.header_playstation_image,
  },
  {
    id: 3,
    title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
    offer: "Exclusive Deal 40% Off",
    buttonText1: "Order Now",
    buttonText2: "Learn More",
    imgSrc: assets.header_macbook_image,
  },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000); // Increased time to let content breathe
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-10 md:px-16 px-5 mt-6 rounded-xl min-w-full"
          >
            {/* Text Content */}
            <div className="md:pl-8 mt-10 md:mt-0 space-y-3">
              <p className="text-orange-600 text-sm md:text-base">{slide.offer}</p>
              <h1 className="max-w-xl text-2xl md:text-[40px] md:leading-[48px] font-semibold">
                {slide.title}
              </h1>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="px-7 md:px-10 py-2 md:py-2.5 bg-orange-600 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition-transform"
                    src={assets.arrow_icon}
                    alt="arrow icon"
                  />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="w-48 md:w-72"
                src={slide.imgSrc}
                alt={slide.title}
                priority
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-400/30"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
