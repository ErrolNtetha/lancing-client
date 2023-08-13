import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export const useFetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProjects() {
            const projectsRef = collection(db, 'projects');
            const p: any = [];
            try {
                const querySnapshot = await getDocs(projectsRef);
                querySnapshot.forEach((doc) => {
                    p.push(doc.data());
                })
                setProjects(p);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    console.log('Projects: ', projects);

    return { loading, projects };
}
