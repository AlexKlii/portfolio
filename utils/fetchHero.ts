import { HeroInterface } from '@/typings/HeroInterface'

export const fetchHero = async (): Promise<HeroInterface> => {
    const res = await fetch(`/api/hero`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}