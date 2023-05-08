import React from 'react';
import { useProfileStore } from '../../hooks/useGlobalStore';
import { ClientSettings } from '../../components/organisms/client/settings';

const Settings = () => {
    const { isClient } = useProfileStore().profile;
    return isClient ? <ClientSettings /> : 'vendor settings';
}

export default Settings;
