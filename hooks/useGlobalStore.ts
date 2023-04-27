import { create } from 'zustand';

type Profile = {
    firstName: string;
    lastName: string;
    isClient: boolean;
};

const myProfile: Profile = {
        firstName: 'Mphumeleli Errol',
        lastName: 'Ntetha',
        isClient: false
    }

export const useProfileStore = create((set) => ({
    profile: {...myProfile},
    switchProfile: (user: Profile) => set(() => ({ profile: user })),
}));
