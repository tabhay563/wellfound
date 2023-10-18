"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const ImageGrid = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/images/Grid/01.jpg",
    "/images/Grid/02.jpg",
    "/images/Grid/03.jpg",
    "/images/Grid/04.jpg",
    "/images/Grid/05.jpg",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div className="group relative transform cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={1080}
            height={1080}
            placeholder="blur"
            blurDataURL={image}
            className="max-h-72  w-full rounded-md object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              className="hover:text-gray-200 text-white w-full h-full"
              key={index}
              onClick={() => openImageViewer(index)}
            >
              View
            </button>
          </div>
        </div>
      ))}
      <div className="z-50">
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={true}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
