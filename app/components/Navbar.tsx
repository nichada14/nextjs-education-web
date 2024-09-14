"use client";

import Image from 'next/image'
import React from 'react'
import { NavbarMenu } from '../data/data'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  return (
    <>
        <nav className='relative z-30'>
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="container py-10 flex justify-between items-center"
        >
        {/* logo section */}
        <div className="">
            <h1 className="font-bold text-2xl">
                The Coding Journey
            </h1>
        </div>
        {/* menu section */}
        <div className="hidden lg:block">
            <ul className='flex items-center gap-3'>
                {NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                        <Link 
                            href={menu.link}
                            className='inline-block py-2 px-3 hover:text-secondary relative group'
                        >
                            <div className="w-2 h-2 bg-secondary absolute mr-2 rounded-full left-1/2 
                            -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                            {menu.title}
                        </Link>
                    </li>
                ))}
                <button className='primary-btn'>Sign In</button>
            </ul>
        </div>
        {/* hamburger menu section */}
        <div className="lg:hidden">
            <IoMdMenu className='text-4xl' />
        </div>
        </motion.div>  
    </nav>
    </>
  )
}

export default Navbar