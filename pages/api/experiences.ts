import type { NextApiRequest, NextApiResponse } from 'next'
import { Experience } from '@/typings/Experience'
import experiences from '@/data/experiences.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<Experience[]>) {
    res.status(200).json(experiences)
}
