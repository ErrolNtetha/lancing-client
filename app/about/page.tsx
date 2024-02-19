// import Head from 'next/head';
import React from 'react';
import AboutPage from '../../components/templates/about';
import { COMPANY_NAME } from '../../constants/companyName';

export default function About() {
    return (
        <section className='max-md:p-3'>
            <head>
                <title> About Us | {COMPANY_NAME} </title>
                <meta property='og:title' content='About Us - Tedcrunch' />
                <meta name='description' content='Everything you need to know about Tedcrunch.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
            </head>
            <AboutPage />
        </section>
    );
} 
