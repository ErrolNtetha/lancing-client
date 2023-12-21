import React from 'react';
import FAQPage from '../../components/templates/faq';

export default function FAQ() {
    return (
        <section className='md:container p-3'>
            <head>
                <title> FAQ | Tedcrunch </title>
                <meta property='og:title' content='Got some questions? We got you! - Tedcrunch' />
                <meta property='og:description' content='Browse all the possible answers in our frequently asked questions.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
                <meta property='og:site_name' content='Tedcrunch South Africa' />
            </head>

            <FAQPage />
        </section>
    );
};
