import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Modal } from '../../modal';
import { Notice } from './notice';

function Prompt() {
    const [isOpen, setOpen] = useState(true);
    const isApproved = false;
    const progress = 'declined'; // pending, null, declined
    const reason = progress === 'declined' 
        ? 'You currently do not have enough experience to start doing work for clients. We suggest gathering some more experience and try applying again.' 
        : null;
    const router = useRouter();

    const handleCancel = () => { 
        if (progress === 'declined') {
            console.log('declined is cancel');
        }
        setOpen(!isOpen);
    };
    
    const handleRedirect = () => {
        console.log('redirect clicked');
        router.push('/apply');
    };

    useEffect(() => {
        // fetch the user and chec if profile is approved
        console.log('useEffect is running');
    }, []);

    return (
        <section>
            {!isApproved && (
                isOpen && (
                    <Modal>
                        <Notice 
                            progress={progress} 
                            handleCancel={handleCancel}
                            handleRedirect={handleRedirect}
                            reason={reason}
                        />
                    </Modal>
                )
            )}
        </section>
    );
};

export default Prompt
