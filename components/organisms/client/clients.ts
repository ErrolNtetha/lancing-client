import { generateRanomId } from "../../../utilities/generateRandomId";

export const clients = [
    {
        name: {
            firstName: 'Mphumeleli',
            lastName: 'Ntetha'
        },
        occupation: 'Marketing Manager',
        verifiedPayment: true,
        projectDuration: 'Ongoing',
        photos: 2,
        budget: 2500,
        createdAt: '12 minutes ago',
        avatar: '/assets/images/errol.png',
        project: {
            title: 'Looking for Logo Designer',
            description: 'We are looking for a logo designer who has an experience in designing logos. We are a startup company. Our startup is a cafe. All specification are attached below for your perusal. This is an ongoing project and might need further work done should you satisfy our requirements.',
            deadline: null,
            budget: 6000,
            contract: 'Ongoing',
            skillLevel: 'Beginner',
            files: 1,
            projectId: generateRanomId()
        },
        projectDescription: 'We are looking for a logo designer who has an experience in designing logos. We are a startup company. Our startup is a cafe. All specification are attached below for your perusal. This is an ongoing project and might need further work done should you satisfy our requirements.'
    },
    {
        name: {
            firstName: 'Zama',
            lastName: 'Radebe'
        },
        occupation: 'Project Manager',
        verifiedPayment: true,
        projectDuration: 'Ongoing',
        photos: 4,
        budget: 1200,
        createdAt: '17 minutes ago',
        avatar: '/images/users/woman.jpg',
        project: {
            title: 'Seeking for a Copywriter',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt dignissimos eius. Culpa nostrum aut non eaque, quibusdam qui sit rem eius quasi quae tenetur vero placeat atque, molestiae illum?',
            deadline: new Date(2023, 7, 12),
            budget: 3600,
            contract: 'Ongoing',
            skillLevel: 'Expert',
            files: 3,
            projectId: generateRanomId()
        },
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt dignissimos eius. Culpa nostrum aut non eaque, quibusdam qui sit rem eius quasi quae tenetur vero placeat atque, molestiae illum?'
    },
    {
        name: {
            firstName: 'Njabulo',
            lastName: 'Ndlovu'
        },
        occupation: 'Office Administrator',
        verifiedPayment: false,
        projectDuration: 'Once-off',
        photos: 2,
        budget: 1500,
        createdAt: '32 minutes ago',
        avatar: '/images/users/guy.jpg',
        project: {
            title: 'Seeking for a Web Designer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt dignissimos eius. Culpa nostrum aut non eaque, quibusdam qui sit rem eius quasi quae tenetur vero placeat atque, molestiae illum?',
            deadline: new Date(2023, 9, 2),
            budget: 8200,
            contract: 'Once-off',
            skillLevel: 'Intermediate',
            files: null,
            projectId: generateRanomId()
        },
        projectDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quos vero sapiente reiciendis praesentium, error nam vitae rem repudiandae porro fugit eius delectus voluptas soluta!'
    },
]
