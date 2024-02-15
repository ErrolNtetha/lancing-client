import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/organisms/footer';
import { Hero } from '../components/organisms/hero';
import { Newsletter } from '../components/organisms/newsletter';
// import { OurTeam } from '../components/organisms/ourTeam';
import { OurVision } from '../components/organisms/ourVison';
import RegisterCTA from '../components/organisms/register-cta';
import Showcase from '../components/organisms/showcase';

const Home = () => {
    return (
        <section className='bg-primary'>
            <Head>
                <title> Find freelancers and get your work done in minutes | Tedcrunch </title>
                <meta name='description' content='Finding freelancers for your work has never been easier with our platform.' />
            </Head>

            <main>
                <Hero />
                <Showcase />
                <OurVision />
                {/* <OurTeam /> */}
                <RegisterCTA />
                <Newsletter />
                <Footer />
            </main>
        </section>
    );
};

export default Home;
