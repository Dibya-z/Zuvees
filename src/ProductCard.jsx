import React from 'react';
import arrow from './asset/rector.png'

function ProductCard({ image, name, price, hasExtraImage }) {
  return (
    <article className="flex flex-col text-xs font-medium text-black">
      <div className="flex gap-4 rounded-lg overflow-hidden">
        <img loading="lazy" src={image} alt={name} className="object-cover w-48 h-48" />
        {hasExtraImage && (
          <img loading="lazy" src={arrow} alt="Additional product image" className="object-contain shrink-0 my-auto w-12 aspect-square" />
        )}
      </div>
      <div className="mt-1.5">
        {name} {price}
      </div>
    </article>
  );
}

export default ProductCard;