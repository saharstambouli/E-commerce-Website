import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../components/products';
import '../styles/ProductList.css';

const Shop = () => {
  return (
    <div>

<div
        className="flex flex-col justify-center items-center  bg-cover bg-center"
        style={{ backgroundImage: 'url("search.png")', height: '300px', margin: '30px' }} L
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center" >
          <h1 className="text-4xl font-bold text-white mb-6">Shop </h1>
        </div>
      </div>
      <h1 className='text-center font-bold pb-4 text-4xl'>Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="button-container">
        <button className='Show'>Show More</button>
      </div>
    </div>
  );
};

export default Shop;