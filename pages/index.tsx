import type { NextPage } from 'next'
import Head from 'next/head'
import { OurVision } from '../components/organisms/ourVison';
import { OurTeam } from '../components/organisms/ourTeam';
import { Footer } from '../components/organisms/footer';
import { Hero } from '../components/organisms/hero';
import { Newsletter } from '../components/organisms/newsletter';

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
