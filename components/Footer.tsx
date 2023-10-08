'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ src }: { src: string }) {
  return (
    <footer className='inline sticky bottom-5 w-full cursor-pointer'>
        <span className='flex items-center justify-center'>
            <Link href="#hero" className='z-0'>
            <Image
                className='rounded-full h-10 w-10 filter grayscale hover:grayscale-0'
                loader={() => src}
                src={src}
                alt="Photo de profil"
                width={420}
                height={420}
            />

            </Link>
        </span>
    </footer>
  )
}