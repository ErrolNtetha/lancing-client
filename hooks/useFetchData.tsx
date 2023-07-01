import React from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const useFetchData = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const clientsRef = collection(db, 'clients');
        const getClients = async () => {
            const clients = await getDocs(clientsRef);
            clients.docs.map((doc)  => setData({ ...doc.data(), id: doc.id }));
        };

        getClients();
    }, []);

    return data;
};
