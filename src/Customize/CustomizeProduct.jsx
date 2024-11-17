import React from 'react';

function CustomizeProduct({ product, onQuantityChange }) {
  const items = ['roses', 'leaves', 'lily', 'wrapper'];

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Customize Your Product:</h3>
      {items.map((item) => (
        <div key={item} className="flex items-center justify-between mt-2">
          <span className="capitalize">{item}</span>
          <div className="flex items-center">
            <button
              onClick={() => onQuantityChange(item, Math.max(0, product[item] - 1))}
              className="px-2 py-1 bg-gray-200 rounded-l"
              aria-label={`Decrease ${item}`}
            >
              -
            </button>
            <span className="px-4 py-1 bg-gray-100">{product[item]}</span>
            <button
              onClick={() => onQuantityChange(item, product[item] + 1)}
              className="px-2 py-1 bg-gray-200 rounded-r"
              aria-label={`Increase ${item}`}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomizeProduct;