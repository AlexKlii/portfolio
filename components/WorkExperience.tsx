'use client'

import React from 'react'
import ExperienceCard from './ExperienceCard'

import { motion } from 'framer-motion'
import { Experience } from '@/typings/Experience'

export default function WorkExperience({ experiences }: { experiences: Experience[] }) {
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
        className='flex flex-col relative h-screen text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] dark:text-gray-500 text-white text-2xl pl-5'>
            Experiences
        </h3>

        <div className='absolute top-36 w-full flex max-xl:space-x-5 overflow-x-auto px-5 pt-10 pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-dark/95 scrollbar-thumb-green'>
            {  
                experiences?.filter(e => e.isActive)
                    .sort((a, b) => a.dateStart < b.dateStart ? 1 : -1)
                    .map(e => {
                        const dateStop: string = e.dateStop ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long'}).format(e.dateStop) : 'now'

                        return {
                            id: e.id,
                            title: e.title,
                            langages: e.langages,
                            dateStart: new Intl.DateTimeFormat( 'en-US', { year: 'numeric', month: 'long'}).format(e.dateStart),
                            dateStop: dateStop,
                            details: e.details,
                            localization: e.localization,
                            src: e.src
                        }
                    })
                    .map(e =>
                        <ExperienceCard key={e.id}
                                        title={e.title}
                                        langages={e.langages}
                                        dateStart={e.dateStart}
                                        dateStop={e.dateStop}
                                        details={e.details}
                                        localization={e.localization}
                                        src={e.src}
                        />
                    )
            }
        </div>
    </motion.div>
  )
}