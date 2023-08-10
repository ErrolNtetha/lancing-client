import React from 'react';

export const Pending = () => {
    return (
        <React.Fragment>
            <section className='py-4'>
                <p> Your application is still <span className='uppercase'>pending</span>. Please be patient as our administrators are processing your application. </p>
                <br />
                <p> Once your application is accepted, we will let you know and will receive an email. </p>
            </section>
        </React.Fragment>
    );
};
