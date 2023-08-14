import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export const useFetchProjects = () => {
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProjects() {
            const projectsRef = collection(db, 'projects');
            const p: any = [];
            try {
                const querySnapshot = await getDocs(projectsRef);
                querySnapshot.forEach((doc) => {
                    p.push({ id: doc.id, project: doc.data() });
                })
                setDocs(p);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    console.log('Projects: ', docs);

    return { loading, docs };
}
