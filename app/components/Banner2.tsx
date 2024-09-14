"use client";

import React from 'react'
import BannerImg from "../assets/banner.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Banner2: React.FC = () => {
  return (
    <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* banner text */}
            <div className="flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                    <h1 className="text-4xl md:text-4xl font-bold !leading-snug">
                        Join Our Community to Start your Journey
                    </h1>
                    <p className='text-dark2'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dicta fuga, quis asperiores vel culpa minus ad esse illum eveniet sed est officia omnis impedit.
                    </p>
                    <Link href={''} className='primary-btn !mt-8'>
                        Join Now
                    </Link>
                </motion.div>
            </div>
            {/* banner image */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex justify-center items-center">
                <Image 
                    src={BannerImg} 
                    alt="#" 
                    className='w-[350px] md:max-w-[450px] object-cover drop-shadow'
                />
            </motion.div>
        </div>
    </section>
  )
}

export default Banner2