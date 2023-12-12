import { generateRanomId } from "../../../../utilities/generateRandomId";

export const offers = [
    {
        id: generateRanomId(),
        names: {
            firstName: 'John',
            lastName: 'Smith'
        },
        expiresIn: new Date('2023-12-22'),
        createdAt: new Date('2023-12-09'),
        amountSpent: 12000,
        rating: 4,
    },
     {
        id: generateRanomId(),
        names: {
            firstName: 'Snenhlanhla',
            lastName: 'Khuzwayo'
        },
        expiresIn: new Date('2023-12-17'),
        createdAt: new Date('2023-12-11'),
        amountSpent: 7000,
        rating: 5,
    },
    {
        id: generateRanomId(),
        names: {
            firstName: 'Mphumeleli',
            lastName: 'Ntetha'
        },
        expiresIn: new Date('2024-01-15'),
        createdAt: new Date('2023-12-08'),
        amountSpent: 23000,
        rating: 5,
    },
    {
        id: generateRanomId(),
        names: {
            firstName: 'Nocole',
            lastName: 'Pamela'
        },
        expiresIn: new Date('2024-01-05'),
        createdAt: new Date('2023-12-10'),
        amountSpent: 21400,
        rating: 5,
    },
];
