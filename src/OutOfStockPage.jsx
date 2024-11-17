import React from 'react';
import Header from './Header';

function OutOfStockPage({ category }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Out of Stock</h1>
          <p className="text-xl">{category} are currently out of stock.</p>
          <p className="mt-4">Please check back later or explore our other products.</p>
        </div>
      </main>
    </div>
  );
}

export default OutOfStockPage;