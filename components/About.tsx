'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutComponent({ about, src }: { about: string, src: string }) {
  return (
    <motion.div
        initial={{
            x: -42,
            opacity: 0
        }}
        whileInView={{
            x:0,
            opacity: 1
        }}
        transition={{duration: 1}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-white text-2xl pl-5'>About</h3>

        <Image
                className='-mb-20 absolute hidden sm:block top-36 md:top-40 md:mb-0 flex-shrink-0 rounded-full object-cover w-40 h-40 md:w-52 md:h-52'
                loader={() => src}
                src={src}
                alt='About section photo'
                width={420}
                height={420}
        />

        <div className='space-y-10 px-0 md:px-10 absolute top-40 sm:top-2/4 xl:top-1/2 text-center'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline dark:decoration-green decoration-yellow'>little</span> background</h4>
            <p className='text-sm text-left sm:text-center px-4 max-h-full font-semibold' dangerouslySetInnerHTML={{ __html: about }} />
        </div>
    </motion.div>
  )
}