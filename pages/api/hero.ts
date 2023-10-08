import type { NextApiRequest, NextApiResponse } from 'next'
import hero from '@/data/hero.json'
import { HeroInterface } from '@/typings/HeroInterface'

export default function handler(req: NextApiRequest, res: NextApiResponse<HeroInterface>) {
    res.status(200).json(hero)
}
