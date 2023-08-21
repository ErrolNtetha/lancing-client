import { collection, DocumentReference, getDoc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export const useFetchProjects = () => {
    const [docs, setDocs] = useState<any[]>([]);

    async function getAuthor(authorRef: DocumentReference<unknown>) {
        if (authorRef) {
            try {
                const author = await getDoc(authorRef);
                if (author.exists()) {
                    return author.data();
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        async function getProjects() {
            const projectsRef = collection(db, 'projects');
            const p: any = [];

            const querySnapshot = await getDocs(projectsRef); // DocumentData
            const documents = querySnapshot.docs;
            for (let doc of documents) {
                const { postedBy } = doc.data(); // DocumentRef or String???
                if (postedBy) {
                    try {
                        const author = await getAuthor(postedBy);
                        p.push({ id: doc.id, project: { ...doc.data(), postedBy: author } });
                    } catch (error) {
                        console.log(error);
                    }
                }
            }

            setDocs(p);
        }

        getProjects();
    }, []);

    return { docs };
};
