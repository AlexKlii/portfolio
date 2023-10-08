import type { NextApiRequest, NextApiResponse } from 'next'
import skills from '@/data/skills.json'
import { SkillInterface } from '@/typings/SkillInterface'

export default function handler(req: NextApiRequest, res: NextApiResponse<SkillInterface[]>) {
    res.status(200).json(skills)
}
