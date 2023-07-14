/* eslint-disable react/jsx-key */

import React from 'react';
import { VendorComponent } from './vendorComponent';
import { v4 as uuidv4 } from 'uuid';

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
        },
        {
            recipient: {
                firstName: 'Dave',
                lastName: 'Johnson',
            },
            service: '3D Artist',
            reviews: 3,
            rating: 5,
            pitchText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
            avatar: '',
            banned: false,
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
        }
    ]
    return (
        <React.Fragment>
            {vendors.map((v) => <VendorComponent key={uuidv4()} {...v} />)}
        </React.Fragment>
    );
};
