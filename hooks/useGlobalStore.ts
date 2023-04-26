import { create } from 'zustand';

type Profile = {
    firstName: string;
    lastName: string;
    role: 'client' | 'vendor';
};

const myProfile: Profile = {
        firstName: 'Mphumeleli Errol',
        lastName: 'Ntetha',
        role: 'client'
    }

export const useProfileStore = create((set) => ({
    profile: {...myProfile},
    switchProfile: (user: Profile) => set(() => ({ profile: user })),
}));
