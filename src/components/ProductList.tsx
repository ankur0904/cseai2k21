import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';


interface ProductListProps {
  products: Product[]; // products prop will be an array of Product
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>No products match your search query.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
