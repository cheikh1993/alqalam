"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const links = [
  { id: 0, title: "Accueil", url: "/" },
  { id: 1, title: "Qui sommes-nous", url: "/alqalam" },
  { id: 2, title: "Services", url: "/service" },
  { id: 3, title: "Contact", url: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 left-0 w-full p-2 h-16 sm:h-14 flex items-center justify-between z-50 shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* LOGO - Left for mobile, center for desktop */}
      <div className="w-auto sm:w-28 ml-4 lg:ml-0">
        <Image src="/log.png" width={80} height={80} alt="logo" className="w-full h-auto" />
      </div>

      {/* MENU - Center */}
      <div className="hidden lg:flex gap-6 items-center">
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="hover:underline">
            {link.title}
          </Link>
        ))}
      </div>

      {/* Social Media Icons - Right, visible only on desktop */}
      <div className="hidden lg:flex gap-4 mr-4">
        <Link href="https://facebook.com" target="_blank" className="text-white text-xl">
          <FaFacebookF />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="text-white text-xl">
          <FaTwitter />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-white text-xl">
          <FaLinkedinIn />
        </Link>
        <Link href="https://github.com" target="_blank" className="text-white text-xl">
          <FaGithub />
        </Link>
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 flex flex-col items-center transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="text-white py-2 text-xl" onClick={() => setIsMenuOpen(false)}>
            {link.title}
          </Link>
        ))}
        <button
          className="p-4 py-2 mt-4 rounded-sm text-white bg-orange-500"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
