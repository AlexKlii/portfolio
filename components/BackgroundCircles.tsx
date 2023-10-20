import { motion } from 'framer-motion'
import React from 'react'

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 4.2}}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border dark:border-green border-yellow-light rounded-full h-[210px] w-[210px] mt-52 animate-ping'></div>
      <div className='absolute border dark:border-green-dark border-yellow-dark rounded-full h-[355px] w-[355px] mt-52 animate-ping opacity-10'></div>
      <div className='absolute border dark:border-green border-yellow-light rounded-full h-[420px] w-[420px] mt-52 animate-pulse'></div>
      <div className='absolute border dark:border-green-dark border-yellow-dark rounded-full h-[710px] w-[710px] mt-52 animate-pulse opacity-10'></div>
    </motion.div>
  )
}