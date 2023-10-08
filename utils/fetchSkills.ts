import { SkillInterface } from '@/typings/SkillInterface'

export const fetchSkills = async (): Promise<SkillInterface[]> => {
    const res = await fetch(`${process.env.BASE_URL}/api/skills`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}