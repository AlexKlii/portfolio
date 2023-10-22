import React from 'react'
import Skill from './Skill'
import { SkillInterface } from '@/typings/SkillInterface'
import { RiArrowGoBackLine } from "react-icons/ri"

export default function SkillDetails({ skill, closeDetail }: { skill: SkillInterface, closeDetail: () => void }) {
    return (
        <div className='flex flex-col items-center w-2/3 mx-auto'>
            <h3 className='text-2xl pb-5 dark:text-gray-400'>{skill.title.toUpperCase()}</h3>
            <Skill id={skill.id}
                skill={skill.code}
                className='w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20'
                proficiency={skill.proficiency}
                skillClicked={closeDetail}
            />

            <p className='mt-5 px-2 sm:mt-10 w-full sm:w-2/3 mx-auto text-center overflow-auto max-h-40 md:max-h-40 sm:max-h-full scrollbar-thin scrollbar-track-gray-dark/95 scrollbar-thumb-green' dangerouslySetInnerHTML={{ __html: skill.details }} />

            <button onClick={closeDetail} className='p-3 mt-5 sm:mt-14 text-lg sm:text-3xl text-white dark:text-gray-dark bg-yellow-dark dark:bg-green-dark opacity-40 hover:opacity-100 rounded-full'>
                <RiArrowGoBackLine />
            </button>
        </div>
    )
}