'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ src }: { src: string }) {
  return (
    <span className='w-10 mx-auto flex sticky bottom-5 items-center justify-center cursor-pointer'>
        <footer>
            <Link href="#hero" className='z-0 w-10'>
              <Image
                  className='rounded-full h-10 w-10 filter grayscale hover:grayscale-0'
                  loader={() => src}
                  src={src}
                  alt="Photo de profil"
                  width={420}
                  height={420}
              />
            </Link>
        </footer>
    </span>
  )
}