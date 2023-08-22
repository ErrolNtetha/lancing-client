import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { useAuth } from './useAuth';

export const useFetchMessages = () => {
    const [messages, setMessages] = useState([]);
    const userAuth = useAuth();
    const messagesList: any = [];

    useEffect(() => {
        async function getMessages() {
            const messagesRef = collection(db, 'messages');
            if (userAuth?.uid) {
                console.log(userAuth.uid);
                
                try {
                    const q = query(messagesRef, where('receiver', '==', `users/${userAuth?.uid}`));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((message) => {
                        console.log('Messages: ', message.data());
                        messagesList.push({ id: message.id, messge: message.data() });
                    });

                    setMessages(messages);
                } catch (error) {
                    console.log(error);
                }
            }
        }

        getMessages();
    }, []);

    return messages;
};
