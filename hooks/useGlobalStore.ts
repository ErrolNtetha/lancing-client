import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Profile = {
    avatar: string;
    names: {
        firstName: string;
        lastName: string;
    },
    isClient: boolean;
    service: string;
    amount: number;
    rating: number;
    description: string;
    approved: {
        isApproved: boolean;
        approvedDate: Date | null;
    };
    banned: {
        isBanned: boolean;
        startDate: Date | null;
        endDate: Date | null;
        reason: string | null;
    };
    reviews: {
        firstName: string;
        lastName: string;
        comment: string;
    }[];
    packages: {
        price: number,
        contract: string,
        type: string,
        description: string,
        discount: {
            isActive: boolean,
            startDate: Date | null,
            endDate: Date | null,
            percentOff: number | null
        }
    }[];
};

const myProfile: Profile = {
    names: {
        firstName: 'Mphumeleli',
        lastName: 'Ntetha',
    },
    service: 'Web Developer',
    isClient: false,
    amount: 5800,
    rating: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat est hic. Voluptatem quam consequatur hic harum qui earum ipsa omnis quaerat animi. Ipsam facere impedit laborum delectus nostrum magnam!',
    avatar: '/images/users/woman.jpg',
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
            firstName: 'Snenhlanhla',
            lastName: 'Radebe',
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
}

export const useProfileStore: any = create(
    persist(
        (set) => ({
            profile: {...myProfile},
            addProfile: (user: Profile) => set(() => ({ profile: user || myProfile })),
            clearProfile: () => set({ profile: {} })
        }),
        {
            name: 'profile-storage'
        }
    )
);
