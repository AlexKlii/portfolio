'use client'

import { Project } from '@/typings/Project'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import ChevronButton from './ChevronButton'

export default function Projects({ projects }: { projects: Project[] }) {
    const { theme } = useTheme()

    const switchColor = () => 'dark' === theme ? 'green' : 'yellow'
    const [color, setColor] = useState(switchColor)

    const filteredProject = projects?.filter(project => project.isActive).sort((a, b) => a.id < b.id ? -1 : 1)

    const handleProject = (direction: 'left'|'right' = 'left') => {
        const container = document.getElementById('container');
        if (container) {
            const scrollValue = (container.scrollWidth - container.clientWidth) / filteredProject.length;
            direction === 'left'
                ? container.scrollLeft -= scrollValue
                : container.scrollLeft += scrollValue
        }
    }

    useEffect(() => {
        setColor(switchColor)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

    return (
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
            className='flex flex-col relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-white text-2xl pl-10'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-dark/95 scrollbar-thumb-green overflow-y-hidden' id='container'>
                {filteredProject.map((project, index) =>
                    <div key={project.id} id={project.id.toString()} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 sm:p-20 xl:p-44 h-screen'>
                        <Image
                            className='hidden md:block top-1/4 md:mb-0 flex-shrink-0 rounded-full object-cover w-36 h-36 md:w-60 md:h-60 xl:w-72 xl:h-72'
                            loader={() => project.src}
                            src={project.src}
                            alt={project.title}
                            width={420}
                            height={420}
                        />

                        <div className='flex justify-around'>
                            <ChevronButton
                                disabled={1 === project.id}
                                color={1 === project.id ? 'gray' : color}
                                onClick={() => handleProject()}
                            ></ChevronButton>

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-xl md:text-2xl xl:text-4xl font-semibold text-center'>
                                    <span className='underline dark:decoration-green decoration-yellow'>
                                        Case Study {index + 1} of {filteredProject.length}:
                                    </span> {project.title}
                                </h4>

                                <p className='text-sm text-left md:text-center scrollbar-thin scrollbar-track-gray-dark/95 scrollbar-thumb-green overflow-y-scroll max-h-72 md:max-h-full sm:overflow-auto'>{project.detail}</p>
                            </div>

                            <ChevronButton
                                direction='right'
                                disabled={projects.length === project.id}
                                color={projects.length === project.id ? 'gray' : color}
                                onClick={() => handleProject('right')}
                            ></ChevronButton>
                        </div>
                    </div>
                )}
            </div>

            <div className='w-full absolute top-[30%] bg-green-dark dark:bg-green-dark/40 left-0 h-2/4 -skew-y-12'></div>
        </motion.div>
    )
}