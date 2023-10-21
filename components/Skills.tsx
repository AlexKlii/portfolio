'use client'

import { SkillInterface } from '@/typings/SkillInterface'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Skill from './Skill'
import { fetchSkills } from '@/utils/fetchSkills'
import SkillDetails from './SkillDetails'

const mountedStyle = { animation: "fadeIn 420ms ease-in" };
const unmountedStyle = {
    animation: "fadeOut 1s ease-out",
    animationFillMode: "forwards"
};

export default function Skills() {
    const [skills, setSkills] = useState<SkillInterface[]>([])
    const [isLoading, setLoading] = useState(true)
    const [skillDetail, setSkillDetail] = useState<SkillInterface>()

    const showSkillDetail = (id: number) => {
        console.log('showSkillDetail', id)
        setSkillDetail(skills.find(skill => skill.id === id))
    }

    const closeSkillDetail = () => {
        setSkillDetail(undefined)
    }

    useEffect(() => {
        fetchSkills()
            .then((skills: SkillInterface[]) => {
                setSkills(skills)
                setLoading(false)
            })
    }, [])

    return (!isLoading &&
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
            className='flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-white text-2xl pl-5'>
                Skills
            </h3>

            <h4 className='absolute top-36 uppercase tracking-[4.2px] dark:text-gray-500 text-white text-sm'>Hover over a skill for currency proficiency</h4>

            <div className='absolute'>
                <div className='top-56 grid grid-cols-3 gap-10' style={!skillDetail ? mountedStyle : unmountedStyle}>
                    {!skillDetail && skills?.filter(skill => skill.isActive)
                        .sort((a, b) => a.proficiency > b.proficiency ? -1 : 1)
                        .map(skill =>
                            <Skill key={skill.id}
                                id={skill.id}
                                skill={skill.code}
                                hovered={true}
                                className='w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20'
                                proficiency={skill.proficiency}
                                skillClicked={showSkillDetail}
                            />
                        )
                    }
                </div>

                <div style={skillDetail ? mountedStyle : unmountedStyle}>
                    {skillDetail && <SkillDetails skill={skillDetail} closeDetail={closeSkillDetail} />}
                </div>
            </div>
        </motion.div>
    )
}