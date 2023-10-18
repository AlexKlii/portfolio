'use client'

import { SkillInterface } from '@/typings/SkillInterface'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

export default function Skills({skills}: { skills: SkillInterface[] }) {
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
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-white text-2xl pl-5'>
            Skills
        </h3>

        <h4 className='absolute top-36 uppercase tracking-[4.2px] dark:text-gray-500 text-white text-sm'>Hover over a skill for currency proficiency</h4>

        <div className='grid grid-cols-3 gap-10 absolute top-56'>
            {
                skills?.filter(skill => skill.isActive)
                    .sort((a, b) => a.proficiency > b.proficiency ? -1 : 1)
                    .map(skill => <Skill key={skill.id} id={skill.id} skill={skill.code} hovered={true} className='w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20' proficiency={skill.proficiency} />)
            }
        </div>
    </motion.div>
  )
}