/* eslint-disable react/jsx-key */

import React from 'react';
import { VendorComponent } from './vendorComponent';

export const ListVendors = () => {
    const vendors = [
        {
            recipient: {
                firstName: 'Snenhlanhla',
                lastName: 'Radebe',
            },
            service: 'Copywriter',
            reviews: 12,
            rating: 4,
            pitchText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
            avatar: '/images/users/woman.jpg',
            banned: true,
            key: 1
        },
        {
            recipient: {
                firstName: 'John',
                lastName: 'Smith',
            },
            service: 'Transcript',
            reviews: 7,
            rating: 3,
            pitchText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
            avatar: '/images/users/guy.jpg',
            banned: false,
            key: 2
        }
    ]
    return (
        <section>
            {vendors.map((v) => <VendorComponent {...v} />)}
        </section>
    );
};
