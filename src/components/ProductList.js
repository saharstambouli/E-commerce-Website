import React from 'react';
import ProductCard from './ProductCard';
import { products } from './products';
import '../styles/ProductList.css';

const ProductList = () => {
  // Limit to 8 products
  const limitedProducts = products.slice(0, 8);

  return (
    <div>
      <h1 className='text-center font-bold pb-4 text-4xl'>Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="button-container">
        <button className='Show'>Show More</button>
      </div>
    </div>
  );
};

export default ProductList;
