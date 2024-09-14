"use client";

import React from 'react'
import { ServicesData } from '../data/ServicesData'
import { motion } from 'framer-motion'
import { SlideLeft } from '../utils/animation'


const Services: React.FC = () => {
  return (
    <section className='bg-white'>
        <div className="container pb-14 pt-16">
            <h1 className="text-4xl font-bold text-left pb-10">
                Services we provide
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                {ServicesData.map((service) => (
                    <motion.div 
                        variants={SlideLeft(service.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        key={service.id}
                        className='flex flex-col items-center justify-center gap-4 p-4 py-7 rounded-2xl bg-[#f4f4f4] hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services