import React from 'react';
import EditProfileClient from '../../../components/organisms/client/settings/editProfile';
import { useProfileStore } from '../../../hooks/useGlobalStore';


const Edit = () => {
    const { isClient } = useProfileStore((state: any) => state?.profile);

    return isClient ? <EditProfileClient /> : 'vendor edit profile page';
};

export default Edit;
