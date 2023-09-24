// components/ImageGrid.js
import React from 'react';

const ImageGrid = () => {
  const images = [
    'Grid/01.jpg',
    'Grid/02.jpg',
    'Grid/03.jpg',
    'Grid/04.jpg',
    // Add more image URLs here
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          <img
            src={`/images/${image}`} // Replace with your image path
            alt={`Image ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
            <button className="text-white hover:text-gray-200">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
