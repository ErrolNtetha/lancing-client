import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/organisms/footer';
import { Hero } from '../components/organisms/hero';
import { Newsletter } from '../components/organisms/newsletter';
// import { OurTeam } from '../components/organisms/ourTeam';
import { OurVision } from '../components/organisms/ourVison';
import RegisterCTA from '../components/organisms/register-cta';
import Showcase from '../components/organisms/showcase';
import { COMPANY_NAME } from '../constants/companyName';

const Home = () => {
    return (
        <section className='bg-primary'>
            <head>
                <title> Find Freelancers in South Africa | Tedcrunch </title>
                <meta property='og:title' content='Login to find freelancers. - Tedcrunch' />
                <meta property='og:description' content='Tedcrunch is a South African freelance marketplace for businesses to find highly skilled freelancers.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
            </head>
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
