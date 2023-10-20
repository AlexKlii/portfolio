'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutInterface } from '@/typings/AboutInterface'
import { fetchAbout } from '@/utils/fetchAbout'

export default function AboutComponent() {
    const [aboutData, setAboutData] = useState<AboutInterface>()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchAbout()
            .then((aboutData: AboutInterface) => {
                setAboutData(aboutData)
                setLoading(false)
            })
    }, [])

    return (!isLoading &&aboutData &&
        <motion.div
            initial={{
                x: -42,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{ duration: 1 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-white text-2xl pl-5'>About</h3>

            <Image
                className='-mb-20 absolute hidden sm:block top-36 md:top-1/4 xl:top-40 md:mb-0 flex-shrink-0 rounded-full object-cover sm:w-60 sm:h-60 xl:w-64 xl:h-64'
                loader={() => aboutData.src}
                src={aboutData.src}
                alt='About section photo'
                width={420}
                height={420}
            />

            <div className='space-y-10 px-0 md:px-10 absolute top-40 sm:top-2/4 xl:top-1/2 text-center'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline dark:decoration-green decoration-yellow'>little</span> background</h4>
                <p className='text-sm xl:text-lg text-left sm:text-center px-4 max-h-full font-semibold' dangerouslySetInnerHTML={{ __html: aboutData.about }} />
            </div>
        </motion.div>
    )
}