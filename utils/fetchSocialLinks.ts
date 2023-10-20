import { SocialLink } from '@/typings/SocialLink'

export const fetchSocialLinks = async (): Promise<SocialLink[]> => {
    const res = await fetch(`/api/socialLinks`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}