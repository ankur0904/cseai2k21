import React from 'react';
const ProductCard: React.FC<{ title: string; image: string; href: string }> = ({ title, image, href }) => {
  return (
    <a className="card" href={href}>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md bg-gray-100"
      />

      {/* Title */}
      <h3 className="card-title" title={title}>
        {title}
      </h3>
    </a>
  );
};

export default ProductCard;
