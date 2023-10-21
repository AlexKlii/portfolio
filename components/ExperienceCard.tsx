import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Skill from './Skill'

export default function ExperienceCard({ title, localization, langages, dateStart, dateStop, details, src }: {
    title: string,
    localization: string,
    langages?: string[],
    dateStart: string,
    dateStop?: string,
    details: string[],
    src: string
}) {
  return (
    <article className='flex flex-col rounded-xl items-center md:space-y-7 flex-shrink-0 w-full md:w-1/2 xl:w-[32%] snap-center dark:bg-gray-card bg-green-dark py-10 px-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mx-auto'>
         <Image
                className='hidden md:block rounded-full w-1/4 h-auto object-cover object-center'
                src={src}
                alt={title}
                width={420}
                height={420}
        />

        <motion.div
            initial={{
                y: -42,
                opacity: 0
            }}
            whileInView={{
                y:0,
                opacity: 1
            }}
            transition={{duration: 1}}
            viewport={{once: true}}
            className='px-0 md:px-10'
        >
            <h4 className='text-xl md:text-2xl xl:text-4xl font-light'>{title}</h4>
            <p className='font-bold text-lg md:text-xl xl:text-2xl mt-1'>{localization}</p>
            <div className='flex item-center mx-auto text-center space-x-2 my-2'>
                {langages?.map((langage, index) => <Skill id={index} skill={langage} key={index} className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' skillClicked={() => {}}/>)}
            </div>
            <p className='uppercase py-2 md:py-5 dark:text-gray-300 text-gray-100'>{dateStart} - {dateStop}</p>
            <div className='overflow-auto max-h-64 md:max-h-40 sm:max-h-full scrollbar-thin scrollbar-track-gray-dark/95 scrollbar-thumb-green'>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {details?.map((detail, i) =>
                        <li key={i}>{detail}</li>
                    )}
                </ul>
            </div>
        </motion.div>
    </article>
  )
}