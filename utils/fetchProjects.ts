import { Project } from '@/typings/Project'

export const fetchProjects = async (): Promise<Project[]> => {
    const res = await fetch(`/api/projects`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}