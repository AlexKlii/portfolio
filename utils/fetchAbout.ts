import { AboutInterface } from '@/typings/About'

export const fetchAbout = async (): Promise<AboutInterface> => {
    const res = await fetch(`${process.env.BASE_URL}/api/about`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}