import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      {/* Image with hover effect */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          style={{ height: '200px' }}
        />
      </div>

      {/* Buttons at the bottom of the image */}
      <div className="flex items-center justify-center space-x-5 bg-white p-2">
        <button className="flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-bold px-2 py-1 rounded">
          <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
          Add to Cart
        </button>
        <button className="flex items-center justify-center bg-red-600 bg-opacity-75 text-white text-sm font-bold px-2 py-1 rounded">
          <FontAwesomeIcon icon={faHeart} className="mr-1" />
          Add to Favorites
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-800">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
