import type { NextApiRequest, NextApiResponse } from 'next'
import { SocialLink } from '@/typings/SocialLink'
import socialLinks from '@/data/socialLinks.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<SocialLink[]>) {
    res.status(200).json(socialLinks)
}
