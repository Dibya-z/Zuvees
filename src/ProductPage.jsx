import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ProductVariants from './Customize/ProductVariant';
import CustomizeProduct from './Customize/CustomizeProduct';
import SendButton from './Customize/SendButton';

function ProductPage({ products, shortDescription, longDescription }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [customizedProduct, setCustomizedProduct] = useState({
    roses: 2,
    leaves: 4,
    lily: 3,
    wrapper: 1
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setIsCustomizing(false);
  };

  const handleCustomize = () => {
    setIsCustomizing(true);
    setSelectedVariant(null);
  };

  const handleQuantityChange = (item, value) => {
    setCustomizedProduct(prev => ({ ...prev, [item]: value }));
  };

  return (
    <div className="flex overflow-hidden flex-col py-14 pr-16 pl-8 bg-white max-md:px-5">
      <Header />
      <div className="self-center mt-20 w-full max-w-6xl max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-8 pt-96 pb-8 w-full rounded-2xl min-h-[768px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src={product.image} className="object-cover absolute inset-0 size-full rounded-2xl" alt={product.name} />
              <div className="flex relative flex-wrap gap-5 justify-between max-md:max-w-full mt-auto">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cfc9360d576f2b8daf2a3cb768dd126c6b21ee93634483180193eaf4e549675?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be" className="object-contain shrink-0 aspect-square w-[60px]" alt="Icon 1" />
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1201502414e692a65cb1eb89f3476f604fe2563266249e11dd39511dc7ca019a?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be" className="object-contain shrink-0 aspect-square w-[60px]" alt="Icon 2" />
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/407e3f85f6e4ff865c4b1df17c1ea8f1d9833d2c6577d069cbb4ace92cbb10b0?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be" className="object-contain self-center mt-80 w-28 max-w-full aspect-[6.99] max-md:mt-10" alt="Indicator" />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full text-black max-md:mt-10">
              <div className="mr-5 text-3xl font-bold max-md:mr-2.5 max-md:ml-1">
                {product.name}
              </div>
              <div className="flex gap-5 justify-between mt-6 max-md:ml-1">
                <div className="self-start mt-2.5 text-2xl font-bold">
                  {product.price}
                </div>
                <div className="flex flex-col text-xs text-center">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3a51fe4729871125a2d2e52871462891f6b663a2a2d70b4cf6f253189327660?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be" className="object-contain w-24 aspect-[5.99]" alt="Rating" />
                  <div className="self-center mt-1">(230 reviews)</div>
                </div>
              </div>
              <div className="mt-5 text-xs text-black text-opacity-80 max-md:mr-1.5 max-md:ml-1">
                {shortDescription}
              </div>
              <ProductVariants onSelect={handleVariantSelect} onCustomize={handleCustomize} />
              {selectedVariant && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Raw Materials:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Roses: 2</li>
                    <li>Leaves: 4</li>
                    <li>Lily: 3</li>
                    <li>Wrapper: 1</li>
                  </ul>
                </div>
              )}
              {isCustomizing && (
                <CustomizeProduct product={customizedProduct} onQuantityChange={handleQuantityChange} />
              )}
              <div className="mt-8 text-xs text-black text-opacity-80 max-md:mr-2 max-md:ml-1">
                {longDescription}
              </div>
              <SendButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;