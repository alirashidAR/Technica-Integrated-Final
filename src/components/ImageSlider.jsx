import React, { useState, useEffect } from "react";
import images from "./images";

const dateList = [
  "8am - 9am",
  "4pm - 5pm",
  "8pm - 9pm",
];

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(dateList[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentTime(dateList[slideIndex]);
  }, [slideIndex]);

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  const dots = images.map((_, index) => (
    <button
      key={index}
      className={`w-4 h-4 rounded-full ${index === slideIndex ? "bg-blue-500" : "bg-gray-300"} ${
        index === slideIndex ? "scale-125" : ""
      }`}
      onClick={() => goToSlide(index)}
    ></button>
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center bg pt-10">
      <p className="text-center mb-8 pb-10">
        <span className="heading heading1 font-Michroma">ENGA</span>
        <span className="heading heading2 font-Michroma">GEMENTS</span>
      </p>
      <div className="caro slider w-2/6 h-4/5 max-md:w-64 max-md:h-60 relative overflow-hidden">
        {images.map((event, index) => (
          <img
            key={index}
            src={event.post}
            alt={`Post${index + 1}`}
            className={`object-fit: cover rounded-3xl absolute top-0 left-0 w-full h-full transition-opacity duration-500 p-4  ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="m-6">
        <div>
          {images.map(
            (event, index) =>
              index === slideIndex && (
                <div key={index}>
                  <h1 className="text-white caption">{event.name}</h1>
                  <p className="text-white small-caption">{currentTime}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        {dots}
      </div>
    </div>
  );
}

export default ImageSlider;
/*

import * as React from 'react';
import { Carousel, CarouselRef, CarouselItem } from 'react-round-carousel';
import image1png from "../imageForWebsite/image1.webp";
import image2png from "../imageForWebsite/image2.webp";
import image3png from "../imageForWebsite/image3.webp";

const images = [    
'image1png.com',  
'image2png.com',   
'image3png.com'
];

const items = images.map((image, index) => ({
  alt: `Image ${index + 1}`,
  image: image,
  content: (
    <div className="App-268268">
      <strong>Round Carousel</strong>
      <span>Slide number {index + 1}</span>
    </div>
  ),
}));


const ImageSlider = () => {
  const carouselRef = React.useRef();

  const carouselSettings = {
    itemWidth: 1000,
    slidePnClick: true, // Set the width of each slide
    slideHeight: 300, // Set the height of each slide
    spaceBetween: 200, // Set the spacing between slides
  };

  return (
    <div className = 'App-268268'>
        <Carousel ref={carouselRef} items={items} slideOnClick {...carouselSettings} />
    </div>
  )
};

export default ImageSlider;

*/