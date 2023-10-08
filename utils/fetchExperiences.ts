import { Experience } from '@/typings/Experience'

export const fetchExperiences = async (): Promise<Experience[]> => {
    const res = await fetch(`${process.env.BASE_URL}/api/experiences`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}