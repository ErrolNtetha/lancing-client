import Head from 'next/head';
import React from 'react';
import { Login } from '../../components/templates/login';

const LoginPage = () => {
    return (
        <React.Fragment>
          <Head>
            <title> Login Into Account </title>
            <meta name='description' content='Login into your Tedious account.' />
            <link rel='icon' href='/favicon.ico' />
          </Head>

        <section className='bg-slate'>
            <Login />
        </section>
        </React.Fragment>
    );
};

export default LoginPage;
