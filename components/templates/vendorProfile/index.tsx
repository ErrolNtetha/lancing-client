'use client'

import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React from 'react'
import { db } from '../../../firebaseConfig';
import VendorSidebar from './introSidebar'
import Navigation from './navigation'

export default function ProfilePage() {
    const [vendor, setVendor] = React.useState({});
    // @ts-ignore
    const { vendorId } = useParams();

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
        <section className='m-3 md:flex md:container gap-4'>
            <section className='md:flex-[0.3] md:border md:border-gray-100 max-h-max rounded-md'>
                <VendorSidebar vendor={vendor} vendorId={vendorId} />
            </section>
            <section className='flex-1 border border-gray-100 rounded-md'>
                <Navigation vendor={vendor} />
            </section>
        </section>
    )
}
