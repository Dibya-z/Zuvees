import React from 'react';

function ProductVariants({ onSelect, onCustomize }) {
  const variants = [
    { id: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dad36a4da7bd18eb4831880e8916242a4ede508ea07c62d85475bdcff61dc393?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be", name: "Variant 1" },
    { id: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/93ff366a5bd8f3a2192d21b5f7e4085dfbbbaf1261b274b610910f0865c8e031?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be", name: "Variant 2" },
    { id: 3, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc8b272f49e5ba6d0dd6f34443245176c8e86aac68c7e477782233fe137d670f?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be", name: "Variant 3" },
    { id: 4, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca254ae2bbaa7fd779ccb4ca839e13336f0bcc599a9f665902cfac4bd781a2b0?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be", name: "Variant 4" }
  ];

  return (
    <div>
      <div className="flex gap-3.5 items-center self-start mt-7 text-xs">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onSelect(variant)}
            className="flex relative flex-col self-stretch py-7 my-auto w-16 rounded aspect-square focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img loading="lazy" src={variant.image} className="object-cover absolute inset-0 size-full" alt={variant.name} />
          </button>
        ))}
      </div>
      <div className="flex gap-6 self-start mt-2 text-xs max-md:ml-1">
        {variants.map((variant) => (
          <div key={variant.id}>{variant.name}</div>
        ))}
      </div>
      <button
        onClick={onCustomize}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Customize
      </button>
    </div>
  );
}

export default ProductVariants;