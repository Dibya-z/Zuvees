import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductSection({ title, products }) {
const [startIndex, setStartIndex] = useState(0);

const nextProduct = () => {
setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
};

const prevProduct = () => {
setStartIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
};

const visibleProducts = [...products.slice(startIndex), ...products.slice(0, startIndex)].slice(0, 5);

return (
<section className="max-w-[1152px] mx-auto">
<h2 className="mt-16 text-2xl font-bold text-black max-md:mt-10">
{title}
</h2>
<div className="flex items-center justify-between mt-6 w-full">
<button onClick={prevProduct} className="bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Previous product">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
</button>
<div className="flex gap-5 overflow-hidden">
{visibleProducts.map((product, index) => (
<Link key={index} to={`/product/${product.id}`}>
<ProductCard {...product} />
</Link>
))}
</div>
<button onClick={nextProduct} className="bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Next product">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
</button>
</div>
</section>
);
}

export default ProductSection;