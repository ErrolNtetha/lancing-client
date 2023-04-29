import { create } from 'zustand';

type Profile = {
    firstName: string;
    lastName: string;
    isClient: boolean;
};

const myProfile: Profile = {
        firstName: 'Mphumeleli Errol',
        lastName: 'Ntetha',
        isClient: true
    }

export const useProfileStore = create((set) => ({
    profile: {...myProfile},
    addProfile: (user: Profile) => set(() => ({ profile: user })),
}));
