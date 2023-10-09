'use client'

import React, { useState } from 'react'
import { SiTypescript, SiMysql, SiSymfony, SiReact, SiSolidity, SiRust, SiAngular, SiShopify, SiFacebook } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrLanguage } from 'react-icons/gr'
import { BsTranslate } from 'react-icons/bs'
import { useTheme } from 'next-themes'

import TooltipSkill from './TooltipSkill'



const GetSkillElement = (id: number, skill: string, color?: string, hovered?: boolean, hoverColor?: string, size?: number, className?: string, proficiency?: number) => {
    const [isHoveringId, setIsHovered] = useState(0)
    const { theme } = useTheme()
    const onMouseEnter = (id: number) => setIsHovered(id)
    const onMouseLeave = () => setIsHovered(0)

    const baseColor: string = theme === 'dark' ? 'green-skills' : 'grey'
    const hoverBaseColor: string = theme === 'dark' ? 'green' : 'white'
    const baseSize: number = 32

    let skillColor = baseColor
    if (color !== undefined) {
        skillColor = color
    }

    let skillHoveredColor = hoverBaseColor
    if (hoverColor !== undefined) {
        skillHoveredColor = hoverColor
    }

    let skillSize = baseSize
    if (size !== undefined) {
        skillSize = size
    }

    skillColor = hovered ? isHoveringId === id ? skillHoveredColor : skillColor : skillHoveredColor

    switch (skill.toLowerCase()) {
        case 'angular':
            return <TooltipSkill title='Angular' skillElement={<SiAngular onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'typescript':
            return <TooltipSkill title='Typescript' skillElement={<SiTypescript onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'sql':
            return <TooltipSkill title='SQL Server' skillElement={<SiMysql onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'symfony':
            return <TooltipSkill title='Symfony' skillElement={<SiSymfony onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'react':
            return <TooltipSkill title='React.js' skillElement={<SiReact onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'nextjs':
            return <TooltipSkill title='Next.js' skillElement={<TbBrandNextjs onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'solidity':
            return <TooltipSkill title='Solidity' skillElement={<SiSolidity onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'rust':
            return <TooltipSkill title='Rust' skillElement={<SiRust onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'shopify':
            return <TooltipSkill title='Shopify' skillElement={<SiShopify onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'translate':
            return <TooltipSkill title='English' skillElement={<BsTranslate onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        case 'fb':
            return <TooltipSkill title='Facebook Ads' skillElement={<SiFacebook onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />
        default:
            return <GrLanguage size={size} />
    }
}

export default function Skill({ id, skill, color, hovered, hoverColor, size, proficiency, className }: {
    id: number
    skill: string
    color?: string
    hovered?: boolean
    hoverColor?: string
    className?: string
    size?: number
    proficiency?: number
}) {
    if (!proficiency) {
        return GetSkillElement(id, skill, color, hovered, hoverColor, size, className)
    } else {
        return (
            <div className='rounded-full border dark:border-green-dark border-gray-light/95 text-green-skills dark:hover:border-green hover:border-gray-light/40 px-5 py-5 md:px-6 md:py-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32'>
                { GetSkillElement(id, skill, color, hovered, hoverColor, size, className, proficiency) }
            </div>
        )
    }
}