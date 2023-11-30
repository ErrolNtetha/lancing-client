import React from 'react';
import { Registration } from '../../components/templates/register';

const Register = () => {
    return (
        <section className='bg-background h-[92vh]'>
            <head>
                <title> Register New Account | Tedcrunch </title>
                <meta property='og:title' content='Register New Account. - Tedcrunch' />
                <meta property='og:description' content='Create a new account in 15 seconds to find freelancers.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
            </head>
            <Registration />
        </section>
    );
};

export default Register;
