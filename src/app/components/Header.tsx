'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Header = () => {
    const [open ,setOpen] = useState(false)
  return (
    <div className='h-12 bg-custumColor px-2 text-white py-1 flex justify-between items-center '>
      <div className='hidden md:flex gap-4 flex items-center' >
        <div >
                  <Image src={"/logo.png"} alt='logo' width={70} height={70} />

        </div>
        <Link  href={"/home"}>Home</Link>
        <Link  href={"/alqalam"}>Qui sommes-nous</Link>
        <Link  href={"/service"}>Service</Link>
        <Link  href={"/contact"}>contact</Link>

      </div>
      {/* Mobile */}
       <div className= 'cursor-pointer md:hidden'>
        <Link href={"/home"} >
        <Image src={"/logo.png"} alt='logo' width={70} height={70} />
        </Link>
       </div>

       <div className='md:hidden'>
       <Menu />
       </div>
      <div>
        <button className='bg-red-200 px-2 py-2 border-spacing-1 text-white'>Contact-nous</button>
      </div>
    </div>
  )
}

export default Header