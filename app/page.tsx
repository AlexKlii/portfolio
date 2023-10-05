import Header from '@/components/Header'
import Head from 'next/head'

import { fetchSocialLinks } from '@/utils/fetchSocialLinks';


const Home = async () => {
  const socialLinks = await fetchSocialLinks()

  return (
    <div className='bg-[rgb(33,33,33)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My protfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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