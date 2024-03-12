import React from 'react';
import ClientUI from '../../components/templates/feed';

const Feed = () => {
    return (
        <section className='bg-white-p w-full h-full'>
            <head>
                <title> Feed | Tedcrunch </title>
                <meta property='og:title' content='Feed | Tedcrunch' />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
            </head>
            <ClientUI />
        </section>
    );
};

export default Feed;
