'use client'

import React from 'react';
import { Login } from '../../components/templates/login';

const LoginPage = () => {
    return (
        <React.Fragment>
            <head>
                <title> Login To Your Account | Tedcrunch </title>
                <meta property='og:title' content='Login to find freelancers. - Tedcrunch' />
                <meta property='og:description' content='Login to browse freelancers at your fingertips.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
            </head>

            <section className='bg-background'>
                <Login />
            </section>
        </React.Fragment>
    );
};

export default LoginPage;
