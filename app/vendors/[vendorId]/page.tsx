import React from 'react';
import ProfilePage from '../../../components/templates/vendorProfile';
import { COMPANY_NAME } from '../../../constants/companyName';

export default function VendorProfile() {
    return (
        <>
            <head>
                <title> Freelancer Profile | {COMPANY_NAME} </title>
            </head> 
            <ProfilePage />
        </>
    );
}
