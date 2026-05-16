import React from 'react';

const ImagePlaceholder = ({ text, className }) => {
  return (
    <div className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}>
      <span className="text-gray-500 text-center px-4">
        {text || 'Image'}
      </span>
    </div>
  );
};

export default ImagePlaceholder;