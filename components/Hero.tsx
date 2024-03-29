'use client'

import React from 'react'
import BackgroundCirecles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroComponent({ words, src }: { words: string[], src: string }) {
    // const [ text ] = useTypewriter({ words, loop: true, delaySpeed: 420 })

    return (
        <div className='h-screen flex flex-col space-y-3 items-center justify-center text-center overflow-hidden'>
            <BackgroundCirecles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={src}
                alt='Profile Picture'
                width={420}
                height={420}
            />
            <div className='z-20'>
                <h1 className='text-xs sm:text-sm uppercase text-gray-300 dark:text-gray-400 pb-2 tracking-[4.2px]'>Fullstack Developer</h1>
                <h2 className='text-xl md:text-5xl lg:text-6xl font-semibold px-10 h-32 sm:h-44 lg:h-60 mx-auto text-white'>
                    <span className='mr-2'>{words}</span>
                    {/* <Cursor cursorColor='green' /> */}
                </h2>

                <div className='pt-2 sm:pt-5 grid grid-cols-2 sm:grid-cols-4 w-4/6 sm:w-full mx-auto'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href='#experiences'>
                        <button className='heroButton'>Experiences</button>
                    </Link>

                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}