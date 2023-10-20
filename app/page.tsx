'use client'

import { fetchSocialLinks } from '@/utils/fetchSocialLinks'
import { SocialLink } from '@/typings/SocialLink'
import { HeroInterface } from '@/typings/HeroInterface'
import { fetchHero } from '@/utils/fetchHero'
import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Providers from './providers'

import dynamic from 'next/dynamic'
const About = dynamic(() => import('@/components/About'), {ssr: false})
const WorkExperience = dynamic(() => import('@/components/WorkExperience'), {ssr: false})
const Skills = dynamic(() => import('@/components/Skills'), {ssr: false})
const Projects = dynamic(() => import('@/components/Projects'), {ssr: false})
const ContactMe = dynamic(() => import('@/components/ContactMe'), {ssr: false})

// export const metadata: Metadata = {
//     title: 'Portfolio',
//     description: 'My protfolio',
//     viewport: 'width=device-width, initial-scale=1',
//     icons: '/favicon.ico'
// }

// export const dynamic = 'force-dynamic'

const Home = () => {
    const [socialLinks, setSocialLinks] = useState<SocialLink[]>([])
    const [isLoadingSocialLinks, setLoadingSocialLinks] = useState(true)

    const [hero, setHero] = useState<HeroInterface>()
    const [isLoadingHero, setLoadingHero] = useState(true)

    useEffect(() => {
        fetchSocialLinks()
            .then((socialLinks: SocialLink[]) => {
                setSocialLinks(socialLinks)
                setLoadingSocialLinks(false)
            })

        fetchHero()
            .then((hero: HeroInterface) => {
                setHero(hero)
                setLoadingHero(false)
            })
    }, [])

    return (!isLoadingSocialLinks && !isLoadingHero &&
        <Providers>
            <div className='dark:bg-gray-dark bg-green-light text-white h-screen snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar dark:scrollbar-track-gray-600/20 scrollbar-track-gray-dark/95 scrollbar-thumb-green'>
                <main>
                    <Header socialLinks={socialLinks} />

                    <section id='hero' className='snap-start'>
                        <Hero words={hero!.typeWriterWords} src={hero!.src} />
                    </section>

                    <section id='about'>
                        <About />
                    </section>

                    <section id='experiences'>
                        <WorkExperience />
                    </section>

                    <section id='skills'>
                        <Skills />
                    </section>

                    <section id='projects'>
                        <Projects />
                    </section>

                    <section id='contact'>
                        <ContactMe />
                    </section>

                    {/* This section is only needed for the smallest screen resolutions (Galaxy S8+ / Iphone SE) */}
                    <section className='snap-end h-44 sm:hidden'></section>

                    <Footer src={hero!.src}></Footer>
                </main>
            </div>
        </Providers>
    )
}

export default Home