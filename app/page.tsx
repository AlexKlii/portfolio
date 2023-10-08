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

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
 
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

    return (
        <div className='bg-[rgb(33,33,33)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>
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

                <section id='projects' className='snap-center'></section>

                <section id='contact' className='snap-center'></section>

                {/* This section is only needed for the smallest screen resolutions (Galaxy S8+ / Iphone SE) */}
                <section className='snap-end h-44 sm:hidden'></section>

                <footer></footer>
            </main>
        </div>
    )
}

export default Home