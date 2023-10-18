export type Project = {
    id: number
    title: string
    src: string
    detail: string
    isActive: boolean
    github: string
    website: string
    ressources: Array<Ressource>
}

export type Ressource = {
    id: 'github'|'website'
    url: string
}