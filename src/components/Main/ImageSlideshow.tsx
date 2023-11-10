import React, { useState, useEffect } from "react";

interface ImageSlideshowProps {
  images: string[]; // Define the prop type as an array of strings (image URLs)
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        width: "420px",
        height: "250px",
        position: "relative",
        marginBottom: "35px",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: `${index * 100}%`,
            transition: "transform 1s ease-in-out",
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          <img
            src={image}
            alt={`${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
}
