// @ts-nocheck

import React from 'react';
import ProfileHeader from '../../organisms/vendor/profile/header';
import SendMessage from '../../organisms/vendor/profile/sendMessageButton';

type VendorProps = {
    vendor: any;
    vendorId: string;
}

export default function VendorSidebar({ vendor, vendorId }: VendorProps) {
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
