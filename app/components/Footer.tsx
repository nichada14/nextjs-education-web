"use client";

import React from 'react'
import { CoursesData, IconData, LinkData } from '../data/FooterData';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="container"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/* first section */}
                <div className="space-y-4 max-w-[300px]">
                    <h1 className="text-2xl font-bold">The Coding Journey</h1>
                    <p className='text-dark2'>
                        TCJ is a platform dedicated to empowering aspiring developers.
                        From beginner tutorials to advanced programming concepts, we
                        provide a comprehensive learning experience designed to help you
                        master coding skills, build projects, and launch your tech career.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    {/* courses section */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Courses</h1>
                        <div className="text-dark2">
                            <ul className="space-y-2 text-lg">
                                {CoursesData.map((courses) => (
                                    <li 
                                        key={courses.id}
                                        className='cursor-pointer hover:text-secondary duration-200'
                                    >{courses.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* links section */}
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">Links</h1>
                        <div className="text-dark2">
                            <ul className="space-y-2 text-lg">
                                {LinkData.map((link) => (
                                    <li 
                                        key={link.id}
                                        className='cursor-pointer hover:text-secondary duration-200'
                                    >{link.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                 </div> 
                 {/* get in touch section */}
                 <div className="space-y-4 max-w-[300px]">
                    <h1 className="text-2xl font-bold">Get In Touch</h1>
                    <div className="flex items-center">
                        <input 
                            type="text" 
                            placeholder='Enter your email'
                            className='p-3 rounded-s-xl bg-white end-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2'
                        />
                        <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                            Go
                        </button>
                    </div>
                    {/* social icons */}
                    <div className="flex space-x-6 py-3">
                        {IconData.map((icon) => (
                            <Link 
                                href={icon.link} 
                                key={icon.id}
                                className="cursor-pointer"
                            >
                                {icon.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer