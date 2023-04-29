import { create } from 'zustand';

type Profile = {
    avatar: string;
    name: {
        firstName: string;
        lastName: string;
    },
    isClient: boolean;
};

const myProfile: Profile = {
        avatar: '/assets/images/errol.png',
        name: {
            firstName: 'Mphumeleli Errol',
            lastName: 'Ntetha',
        },
        isClient: true
    }

export const useProfileStore = create((set) => ({
    profile: {...myProfile},
    addProfile: (user: Profile) => set(() => ({ profile: user })),
}));
