'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  {
    id: 0, title: "Home", url: "/"
  },
  {
    id: 1, title: "Service", url: "/service"
  },
  {
    id: 2, title: "alqalam", url: "/alqalam"
  },
  {
    id: 3, title: "contact", url: "/contact"
  },
]

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {
        !open ? <Image src={"/menu.png"} width={20} alt='menu' height={20} onClick={() => setOpen(true)} /> :
          <Image src={"/close.png"} width={20} alt='menu' height={20} onClick={() => setOpen(false)} />
      }

     {
      open &&  <div className='bg-red-600 absolute left-0 top-16 px-3 gap-3 w-full  h-[calc(100vh-6rem)] flex  flex-col items-center justify-center text-3xl z-10'>

        {

          links.map((link) => {
            return (

              <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>{link.title}</Link>

            )
          })
        }
      </div> 
     }
    </div>
  )
}

export default Menu