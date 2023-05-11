import { create } from 'zustand';

type Profile = {
    avatar: string;
    name: {
        firstName: string;
        lastName: string;
    },
    isClient: boolean;
    bankDetails: {
        accountHolder: string;
        accountType: string;
        accountNumber: string;
        branchCode: string;
    }
};

const myProfile: Profile = {
        avatar: '/assets/images/errol.png',
        name: {
            firstName: 'Mphumeleli Errol',
            lastName: 'Ntetha',
        },
        isClient: true,
        bankDetails: {
            accountHolder: 'Mphumeleli Errol Ntetha',
            accountType: 'savings',
            accountNumber: '10128807421',
            branchCode: '051001'
        },
    }

export const useProfileStore = create((set) => ({
    profile: {...myProfile},
    addProfile: (user: Profile) => set(() => ({ profile: user })),
}));
