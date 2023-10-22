// @ts-nocheck
'use client'

import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React from 'react';
import { db } from '../../../firebaseConfig';
import { useVendorExperienceStore } from '../../../hooks/useGlobalStore';
import ProfileHeader from '../../organisms/vendor/profile/header';
import SendMessage from '../../organisms/vendor/profile/sendMessageButton';

export default function VendorSidebar() {
    const [vendor, setVendor] = React.useState({});
    const { vendorId } = useParams();
    const { addVendorExperience } = useVendorExperienceStore();

    React.useEffect(() => {
        const getVendorProfile = async() => {
            const userRef = doc(db, `users/${vendorId}`);
            try {
                const vendorProfile = await getDoc(userRef);
                if (vendorProfile.exists()) {
                    setVendor(vendorProfile.data());
                }
            } catch (error) {
                console.log('an error occurred: ', error);
            }
        }

        getVendorProfile();
    }, [vendorId]);

    return (
        <section className='my-4 md:m-4'>
            <ProfileHeader
                names={vendor?.names} 
                title={vendor?.title} 
                bio={vendor?.bio} 
                avatar={vendor?.avatar}
            />
            <SendMessage
                uid={vendorId}
                names={vendor?.names}
            />
        </section>
    )
}
