export type Project = {
    id: number
    title: string
    src: string
    detail: string
    isActive: boolean
    ressources: Array<Ressource>
}

export type Ressource = {
    id: string
    url: string
}