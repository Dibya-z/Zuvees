import React from 'react';
import image2 from './asset/image2.jpg';
import arrow from './asset/arrow.jpg'

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
        {/* <img
          loading="lazy"
          src={arrow}
          alt="Arrow icon"
          className="object-contain shrink-0 my-auto w-6 aspect-square"
        /> */}
      </div>
    </section>
  );
}

export default Banner;