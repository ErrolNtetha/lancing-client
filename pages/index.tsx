import type { NextPage } from 'next'
import Head from 'next/head'
import { OurTeam } from '../views/ourTeam'
import { OurVision } from '../views/vision'
import { Footer } from '../components/footer';
import { Hero } from '../views/hero'
import { Newsletter } from '../views/newsletter/';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Join The Newsletter for Freelancers in South Africa | Duello </title>
        <meta name="description" content="Find freelancers all over South Africa!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-slate'>
        <Hero />
        <OurVision />
        <OurTeam />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

export default Home
