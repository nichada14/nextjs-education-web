"use client";

import React from 'react';
import Navbar from './Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from 'next/image';
import HeroImg from "../assets/hero.png";
import { motion } from 'framer-motion';
import { FadeUp } from '../utils/animation';

const Hero: React.FC = () => {
  return (
    <section className='bg-light overflow-hidden relative'>
        {/* navbar component */}
        <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
            {/* brand info */}
            <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
                <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
                    <motion.h1 
                        variants={FadeUp(0.6)}
                        initial="initial"
                        animate="animate"
                        className="text-3xl lg:text-5xl font-bold !leading-snug"
                    >
                        Let's Learn to build a{" "}
                        <span className='text-secondary'>Website</span> for your business
                    </motion.h1>
                    <motion.div
                        variants={FadeUp(0.8)}
                        initial="initial"
                        animate="animate"
                        className="flex justify-center md:justify-start"
                    >
                        <button className='primary-btn flex items-center gap-2 group'>
                            Get Start
                            <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300' />
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* image */}
            <div className="flex justify-center items-center">
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                >
                    <Image
                        src={HeroImg} 
                        alt={''} 
                        className='w-[400px] xl:w-[600px] relative z-10 drop-shadow'
                    />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero