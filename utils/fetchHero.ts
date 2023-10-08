import { HeroInterface } from '@/typings/Hero'

export const fetchHero = async (): Promise<HeroInterface> => {
    const res = await fetch(`${process.env.BASE_URL}/api/hero`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}