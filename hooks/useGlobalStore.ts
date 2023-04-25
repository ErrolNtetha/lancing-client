import { create } from 'zustand';

export const useUserStore = create((set) => ({
    users: [],
    addUser: () => set((state) => ({ count: state.count + 1 })),
    removeUser: () => set((state) => ({ count: state.count - 1 })),
}));

export const useProfileStore = create((set) => ({
    profile: [],
    addProfile: (user) => set(() => ({ profile: user })),
    removeProfile: () => set({}, true),
}));
