import React from 'react';
import { Product } from '../types/product';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="card">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain rounded-md bg-gray-100"
      />

      {/* Product Title */}
      <h3 className="card-title" title={product.title}>
        {product.title}
      </h3>

      {/* Product Price */}
      <p className="card-price">${product.price.toFixed(2)}</p>

      {/* Product Rating */}
      <div className="card-rating">
        <span>⭐ {product.rating.rate}</span>
        <span className="text-gray-500 text-sm">({product.rating.count} reviews)</span>
      </div>
    </div>
  );
};

export default ProductCard;
