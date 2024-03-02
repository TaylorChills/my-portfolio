'use client';

import menu from '../../public/menu.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className='flex justify-between bg-background p-4 borderGray w-full fixed top-0 left-0 right-0 z-10'>
      <h2>Taylor Chiles</h2>
      <button className='md:hidden' onClick={() => setOpenNav(!openNav)}>
        <Image src={menu} alt='menu-button' height={26} width={26} />
      </button>
      <div
        className={`absolute right-0 bg-background border-2 border-gray-700 p-4 w-1/3 top-[56px] rounded-bl-xl round md:static md:block md:w-min md:bg-transparent md:py-0 md:border-none ${
          !openNav && 'hidden'
        }`}
      >
        <ul className='flex flex-col gap-5 md:flex-row items-center'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
