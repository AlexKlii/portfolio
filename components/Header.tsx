'use client'

import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { SocialLink } from '@/typings/SocialLink'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import DarkModeButton from '@/components/DarkModeButton'

const Header = ({ socialLinks }: {socialLinks: SocialLink[]}) => {
    const [isHoveringId, setIsHovered] = useState(0)
    const { theme } = useTheme()
    const onMouseEnter = (id: number) => setIsHovered(id)
    const onMouseLeave = () => setIsHovered(0)
    const EMAIL_ID: number = 420
    const green: string = '#72FF72'

    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-4'>
            <motion.div
                initial={{
                    x: -420,
                    opacity: 0,
                    scale: 0.42,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1 }}
                className='flex flex-row items-center'
            >
                {socialLinks?.filter(socialLink => socialLink.isActive).map((socialLink) =>
                    <SocialIcon
                        key={socialLink.id}
                        url={socialLink.url}
                        fgColor={isHoveringId === socialLink.id ? green : theme === 'dark' ? 'gray' : 'white'}
                        onMouseEnter={() => onMouseEnter(socialLink.id)}
                        onMouseLeave={() => onMouseLeave()}
                        bgColor='transparent'
                    />
                )}
            </motion.div>

            <motion.div
                initial={{
                    x: 420,
                    opacity: 0,
                    scale: 0.42,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1 }}
                className='flex flex-row items-center mx-2 sm:mx-4 text-gray-300 cursor-pointer'
            >
                <div onMouseEnter={() => onMouseEnter(EMAIL_ID)} onMouseLeave={() => onMouseLeave()} className='pr-5'>
                    <SocialIcon
                        network='email'
                        url='#contact'
                        bgColor='transparent'
                        fgColor={isHoveringId === EMAIL_ID ? green : theme === 'dark' ? 'gray' : 'white'}
                    />
                    <Link href='#contact'>
                        <p className='uppercase hidden md:inline-flex text-sm'>
                            <span className={isHoveringId === EMAIL_ID ? 'text-green' : 'dark:text-gray-light text-white'}>
                                Contact me
                            </span>
                        </p>
                    </Link>
                </div>
                
                <DarkModeButton />
            </motion.div>
        </header>
    )
}

export default Header 