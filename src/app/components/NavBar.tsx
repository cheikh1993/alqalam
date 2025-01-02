"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  { id: 0, title: "Accueil", url: "/" },
  { id: 1, title: "Qui sommes-nous", url: "/alqalam" },
  { id: 2, title: "Services", url: "/service" },
  { id: 3, title: "Contact", url: "/contact" },
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle function for hamburger menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="fixed top-0 left-0 w-full bg-slate-50 text-custumColor p-2 h-16 sm:h-14 flex items-center justify-between z-50 shadow-md">
      {/* LOGO */}
      <div className="w-auto sm:w-28">
        <Image src="/logo.png" width={80} height={80} alt="logo" className="w-full h-auto" />
      </div>

      {/* MOBILE HAMBURGER ICON */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-custumColor">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MENU - Desktop view */}
      <div className="hidden lg:flex gap-4 items-center">
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="hover:underline">
            {link.title}
          </Link>
        ))}
      </div>

      {/* CONTACT BUTTON - Desktop */}
      <div className="hidden lg:block">
        <button className="p-2 py-1 rounded-sm text-white bg-orange-500">
          Contact
        </button>
      </div>

      {/* MOBILE MENU - Show when hamburger is clicked */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-custumColor p-6 flex flex-col items-center transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
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

  )
}

export default NavBar
