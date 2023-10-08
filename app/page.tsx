import { fetchSocialLinks } from '@/utils/fetchSocialLinks'
import { SocialLink } from '@/typings/SocialLink'
import { Metadata } from 'next'

import Header from '@/components/Header'
 
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My protfolio',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico'
}

export const dynamic = 'force-dynamic'

const Home = async () => {
    const socialLinks: SocialLink[] = await fetchSocialLinks()

    return (
        <div className='bg-[rgb(33,33,33)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>
            <main>
                <Header socialLinks={socialLinks} />

                <section id="hero" className='snap-start'></section>

                <section id="about" className='snap-center'></section>

                <section id="experience" className='snap-center'></section>

                <section id="skills" className='snap-center'></section>

                <section id="projects" className='snap-center'></section>

                <section id="contact" className='snap-center'></section>

                {/* This section is only needed for the smallest screen resolutions (Galaxy S8+ / Iphone SE) */}
                <section className='snap-end h-44 sm:hidden'></section>

                <footer></footer>
            </main>
        </div>
    )
}

export default Home