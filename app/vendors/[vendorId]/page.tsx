// @ts-nocheck
'use client'

import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React from 'react';
import ProfileHeader from '../../../components/organisms/vendor/profile/header';
import SendMessage from '../../../components/organisms/vendor/profile/sendMessageButton';
import { db } from '../../../firebaseConfig';

export default function VendorProfile() {
    const [vendor, setVendor] = React.useState({});
    const { vendorId } = useParams();

    React.useEffect(() => {
        const getVendorProfile = async() => {
            const userRef = doc(db, `users/${vendorId}`);
            try {
                const author = await getDoc(userRef);
                if (author.exists()) {
                    setVendor(author.data());
                }
            } catch (error) {
                console.log(error);
            }
        }

        getVendorProfile();
    }, [vendorId]);

    return (
        <>
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
        </>
    )
}
