import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { db } from '../firebaseConfig';
import { useAuth } from './useAuth';

export const useProfileStore: any = create(
    persist(
        (set: any) => ({
            profile: null,
            addProfile: (user: any) => set(() => ({ profile: user })),
            clearProfile: () => set({ profile: {} }),
        }),
        {
            name: 'profile-storage-tedcrunch',
        }
    )
);

export const usePersonalStore: any = create(
    (set: any) => ({
        personal: {
            avatar: null,
            title: '',
            bio: '',
        },
        addPersonalData: (personalData: any) => set(() => ({ personal: personalData })),
    })
);

export const useEducationStore: any = create(
    (set: any) => ({
        education: [],
        addEducation: (education: any) => set((state: any) => ({ education: [...state.education, education ] })),
    })
);

export const useExperienceStore: any = create(
    (set: any) => ({
        experience: [],
        addExperience: (experience: any) => set((state: any) => ({ experience: [...state.experience, experience ] })),
    })
);

export const usePortfolioStore: any = create(
    (set: any) => ({
        portfolios: [],
        addPortfolio: (experience: any) => set((state: any) => ({ experience: [...state.experience, experience ] })),
    })
);

export const useVendorExperienceStore: any = create(
    (set: any) => ({
        vendorExperience: [],
        addVendorExperience: (experience: any) => set((state: any) => ({ experience: [...state.experience, experience ] })),
    })
);

export const useNotificationStore: any = create(
    (set: any) => ({
        notifications: [],
        addNotification: async (notifications: any) => {
            const  { currentUser } = useAuth();
            const uid = doc(db, `users/${currentUser?.uid}`);

            try {
                const notificationsRef = collection(db, 'notifications');
                const q = query(notificationsRef, where('to', '==', uid));

                const querySnapshots = await getDocs(q);
                querySnapshots.forEach(n => {
                    set((state: any) => (
                        ({ notifications: [...state.notifications, notifications ] })
                    ))
                });
            } catch (error) {
                console.log('Error getting notificatioons: ', error);
            }
        }}),
);
