import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export const useFetchVendors = () => {
    const [vendors, setVendors] = useState<any>([]);
    const v: any = [];

    useEffect(() => {
        async function getVendors() {
            const vendorsRef = collection(db, 'users');
            const q = query(vendorsRef, where('isClient', '==', false));

            const querySnapshot = await getDocs(q);
            if (querySnapshot) {
                querySnapshot.forEach((vendor) => {
                    v.push({ id: vendor.id, vendor: vendor.data() });
                });
            }

            setVendors(v);
        }
        
        getVendors();
    }, []);

    return vendors;
}
