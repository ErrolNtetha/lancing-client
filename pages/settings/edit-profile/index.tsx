import React from 'react';
import { useForm } from 'react-hook-form';
import Edit from './edit';

const EditProfile = () => {
    const { register } = useForm();
    return (
        <>
            <Edit 
                register={register}
            />
        </>
      );
};

export default EditProfile;
