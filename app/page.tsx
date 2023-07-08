import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/organisms/footer';
import { Hero } from '../components/organisms/hero';
import { Newsletter } from '../components/organisms/newsletter';
import { OurTeam } from '../components/organisms/ourTeam';
import { OurVision } from '../components/organisms/ourVison';

const Home = () => {
    return (
        <section className='bg-slate'>
            <Head>
                <title> Find freelancers and get your work done in minutes | Duello </title>
                <meta name='description' content='Finding freelancers for your work has never been easier with our platform.' />
            </Head>

            <main>
                <Hero />
                <OurVision />
                <OurTeam />
                <Newsletter />
                <Footer />
            </main>
        </section>
    );
};

export default Home;
