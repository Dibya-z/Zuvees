import React from 'react';
import { Link } from 'react-router-dom';
import imageZ from './asset/imageZ.jpg'
import vector from './asset/Vector.jpg'

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center w-full text-2xl text-white whitespace-nowrap max-md:max-w-full px-16 max-md:px-5">
      <img loading="lazy" src={imageZ} alt="Flower Shop Logo" className="object-contain shrink-0 self-stretch my-auto max-w-full aspect-[3.1] w-[130px]" />
      <nav className="flex gap-10 items-center self-stretch p-1 bg-zinc-300 rounded-[32px] max-md:max-w-full">
        <Link to="/bouquets" className="self-stretch px-11 pt-3.5 pb-5 text-center rounded-3xl bg-stone-400 max-md:px-5">Bouquets</Link>
        <Link to="/cakes" className="self-stretch my-auto text-center">Cakes</Link>
        <Link to="/cards" className="self-stretch my-auto text-center">Cards</Link>
        <Link to="/chocolates" className="self-stretch my-auto basis-auto">Chocolates</Link>
      </nav>
      <button aria-label="Search" className="bg-transparent border-none cursor-pointer">
        <img loading="lazy" src={vector} alt="Search icon" className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square" />
      </button>
    </header>
  );
}

export default Header;