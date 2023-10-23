export const vendors = [
    {
        names: {
            firstName: 'Snenhlanhla',
            lastName: 'Radebe',
        },
        service: 'Copywriter',
        amount: 5800,
        rating: 4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
        avatar: '/images/users/woman.jpg',
        approved: {
            isApproved: true,
            approvedDate: null,
        },
        banned: {
            isBanned: false,
            startDate: null,
            endDate: null,
            reason: null,
        },
        reviews: [
            {
                firstName: 'Mphumeleli',
                lastName: 'Ntetha',
                comment: 'I am happy with the work i was provided. I really recommend Snenhlanhla!',
            },
        ],
        packages: [
            {
                price: 6000,
                contract: 'flat',
                type: 'basic',
                description: 'This is a basic package',
                discount: {
                    isActive: true,
                    startDate: null,
                    endDate: null,
                    percentOff: 30
                }
            },
            {
                price: 9400,
                contract: 'flat',
                type: 'standard',
                description: 'This is a standard package',
                discount: {
                    isActive: true,
                    startDate: null,
                    endDate: null,
                    percentOff: 30
                }
            },
        ]
    },
    {
        names: {
            firstName: 'Sandile',
            lastName: 'Dlamini',
        },
        service: 'Logo Designer',
        amount: 4200,
        rating: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
        avatar: '/images/users/man.jpg',
        approved: {
            isApproved: false,
            approvedDate: null,
        },
        banned: {
            isBanned: false,
            startDate: null,
            endDate: null,
            reason: null,
        },
        reviews: [],
        packages: []
    },
    {
        names: {
            firstName: 'John',
            lastName: 'Smith',
        },
        service: 'Video Editor',
        amount: 6500,
        rating: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
        avatar: '/images/users/guy.jpg',
        approved: {
            isApproved: false,
            approvedDate: null,
        },
        banned: {
            isBanned: false,
            startDate: null,
            endDate: null,
            reason: null,
        },
        reviews: [
            {
                firstName: 'Njabulo',
                lastName: 'Ndlovu',
                comment: 'I am happy with the work i was provided. I really recommend Snenhlanhla!',
            },
            {
                firstName: 'Sandile',
                lastName: 'Dlamini',
                comment: 'I am happy with the work i was provided. I really recommend Snenhlanhla!',
            },
        ],
        packages: []
    }
];
