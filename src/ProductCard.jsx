import React from 'react';

function ProductCard({ image, name, price, hasExtraImage }) {
  return (
    <article className="flex flex-col text-xs font-medium text-black">
      <div className="flex gap-4 rounded-lg overflow-hidden">
        <img loading="lazy" src={image} alt={name} className="object-cover w-48 h-48" />
        {hasExtraImage && (
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f5f845489853977d97a6b2ad307edf2bdeb4439b8d254cc092e85b3de3759e5?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be" alt="Additional product image" className="object-contain shrink-0 my-auto w-12 aspect-square" />
        )}
      </div>
      <div className="mt-1.5">
        {name} {price}
      </div>
    </article>
  );
}

export default ProductCard;