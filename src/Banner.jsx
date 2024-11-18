import React from 'react';
import image2 from './asset/image2.jpg';

function Banner() {
  return (
    <section className="flex relative flex-col items-end self-center px-16 pt-72 pb-11 mt-20 max-w-full text-base font-bold text-white min-h-[384px] w-[1152px] max-md:px-5 max-md:pt-24 max-md:mt-10 rounded-lg overflow-hidden">
      <img
        loading="lazy"
        src={image2}
        alt="Summer special banner background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative gap-7 py-2.5 pr-9 pl-4 rounded-lg bg-black bg-opacity-80 max-md:pr-5">
        <p>
          Summer special <br /> Handmade bouquet
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f7bad976f42f7e2ee4fd4a454a54d7257ba4cdb82febf1918549a047452e7c?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be"
          alt="Arrow icon"
          className="object-contain shrink-0 my-auto w-6 aspect-square"
        />
      </div>
    </section>
  );
}

export default Banner;