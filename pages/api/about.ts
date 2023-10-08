import type { NextApiRequest, NextApiResponse } from 'next'
import about from '@/data/about.json'
import { AboutInterface } from '@/typings/AboutInterface'

export default function handler(req: NextApiRequest, res: NextApiResponse<AboutInterface>) {
    res.status(200).json(about)
}
