// pages/index.js
import React from 'react';
import ImageGrid from 'components/ImageGrid/ImageGrid';

const Grid = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 p-5 text-center">Image Grid</h1>
      <ImageGrid />
    </div>
  );
};

export default Grid;
