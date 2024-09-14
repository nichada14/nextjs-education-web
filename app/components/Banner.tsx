"use client";

import React from 'react'
import BannerImg from "../assets/education.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeUp } from '../utils/animation';
import { BannerData } from '../data/BannerData';

const Banner: React.FC = () => {
  return (
    <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* banner image */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex justify-center items-center">
                <Image 
                    src={BannerImg} 
                    alt={''} 
                    className='w-[350px] md:max-w-[450px] object-cover drop-shadow'
                />
            </motion.div>
            {/* banner text */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-12">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold !leading-snug"
                    >
                        The World's Leading Online Learning Platform
                    </motion.h1>
                    <div className="flex flex-col gap-6">
                        {BannerData.map((banner, index) => (
                            <motion.div
                                variants={FadeUp(index * 0.2)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                key={banner.id}
                                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                            >
                                <div className='text-2xl'>{banner.icon}</div>
                                <p className='text-lg'>{banner.title}</p> 
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner