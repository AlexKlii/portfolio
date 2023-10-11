import { fetchSocialLinks } from '@/utils/fetchSocialLinks'
import { SocialLink } from '@/typings/SocialLink'
import { Metadata } from 'next'
import { HeroInterface } from '@/typings/HeroInterface'
import { fetchHero } from '@/utils/fetchHero'
import { AboutInterface } from '@/typings/AboutInterface'
import { fetchAbout } from '@/utils/fetchAbout'
import { Experience } from '@/typings/Experience'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { SkillInterface } from '@/typings/SkillInterface'
import { fetchSkills } from '@/utils/fetchSkills'
import { Project } from '@/typings/Project'
import { fetchProjects } from '@/utils/fetchProjects'
import { Contact } from '@/typings/Contact'
import { fetchContact } from '@/utils/fetchContact'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import Providers from './providers'

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'My protfolio',
    viewport: 'width=device-width, initial-scale=1',
    icons: '/favicon.ico'
}

export const dynamic = 'force-dynamic'

const Home = async () => {
    const socialLinks: SocialLink[] = await fetchSocialLinks()
    const hero: HeroInterface = await fetchHero()
    const about: AboutInterface = await fetchAbout()
    const experiences: Experience[] = await fetchExperiences()
    const skills: SkillInterface[] = await fetchSkills()
    const projects: Project[] = await fetchProjects()
    const contact: Contact = await fetchContact()

    return (
        <Providers>
            <div className='dark:bg-gray-dark bg-gray-light dark:text-white text-gray-dark/95 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar dark:scrollbar-track-gray-400/20 scrollbar-track-gray scrollbar-thumb-green'>
                <main>
                    <Header socialLinks={socialLinks} />

                    <section id='hero' className='snap-start'>
                        <Hero words={hero.typeWriterWords} src={hero.src} />
                    </section>

                    <section id='about' className='snap-center'>
                        <About about={about.about} src={about.src} />
                    </section>

                    <section id='experiences' className='snap-center'>
                        <WorkExperience experiences={experiences} />
                    </section>

                    <section id='skills' className='snap-center'>
                        <Skills skills={skills} />
                    </section>

                    <section id='projects' className='snap-center'>
                        <Projects projects={projects} />
                    </section>

                    <section id='contact' className='snap-center'>
                        <ContactMe contact={contact} />
                    </section>

                    {/* This section is only needed for the smallest screen resolutions (Galaxy S8+ / Iphone SE) */}
                    <section className='snap-end h-44 sm:hidden'></section>

                    <Footer src={hero.src}></Footer>
                </main>
            </div>
        </Providers>
    )
}

export default Home