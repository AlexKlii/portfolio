import { AboutInterface } from '@/typings/AboutInterface'

export const fetchAbout = async (): Promise<AboutInterface> => {
    const res = await fetch(`/api/about`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}