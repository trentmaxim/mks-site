'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/app/globals.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavTopVisible, setIsNavTopVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsNavTopVisible(false);
      } else {
        // Scrolling up
        setIsNavTopVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` main-navbar sticky top-0 z-50 bg-white text-black dark:bg-black dark:text-white transition-all duration-300
    ${isNavTopVisible ? '' : 'top-[-5%]'}`}>
      <div
        className={`flex items-center md:justify-center sm:justify-between px-4 py-3 border-b border-gray-300 w-full nav-top transform transition-all duration-500 ease-in-out ${
          isNavTopVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold">Malayala Kshatriya Samajam</h1>

        {/* Hamburger Button */}
        <button
          className="block md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`md:flex md:items-center md:justify-center ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center">
          <li className="p-4">
            <Link href="#" className="hover-underline">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link href="#" className="hover-underline">
              History
            </Link>
          </li>
          <li className="p-4">
            <Link href="#" className="hover-underline">
              Gallery
            </Link>
          </li>
          <li className="p-4">
            <Link href="#" className="hover-underline">
              About
            </Link>
          </li>
          <li className="p-4">
            <Link href="#" className="hover-underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}