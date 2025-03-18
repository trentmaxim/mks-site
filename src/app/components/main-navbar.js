'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import '@/app/globals.css';

export default function NavBar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.main-navbar h1');
      const navbar = document.querySelector('.main-navbar');
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        header.classList.add('opacity-0');
        header.classList.add('shrink-navbar');
      } else {
        header.classList.remove('opacity-0');
        header.classList.remove('shrink-navbar');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="main-navbar sticky top-0 z-50 bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
      <div className="flex flex-col items-center justify-end">
        <h1 className="p-5 transition-opacity duration-300">Malayala Kshatriya Samajam</h1>
        <div className="w-3/4 border-t border-gray-300 my-2"></div>
        <ul className="flex flex-row">
          <li className="p-5">
            <Link href="#" className="hover-underline">Home</Link>
          </li>
          <li className="p-5">
            <Link href="#" className="hover-underline">History</Link>
          </li>
          <li className="p-5">
            <Link href="#" className="hover-underline">Gallery</Link>
          </li>
          <li className="p-5">
            <Link href="#" className="hover-underline">About</Link>
          </li>
          <li className="p-5">
            <Link href="#" className="hover-underline">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}