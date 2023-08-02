import React from 'react';
import { FormLabel } from '../../components/molecules/formLabel';

interface SProps {
    register: Function;
    component: React.ReactNode;
}

export const SocialMedia = ({ register, component }: SProps) => {
    return (
        <section>
            <h3 className='font-semibold text-lg'> Social Media Profiles </h3>
            <p className='text-sm mb-4'> Fill in your personal social media profiles. </p>
            <FormLabel
                type='url'
                name='facebook'
                labelName='Facebook'
                placeholder='E.g.:https://www.facebook.com/profile.php?id=12345'
                register={register}
                required={true}
            />
            <FormLabel
                type='url'
                name='twitter'
                labelName='Twitter'
                placeholder='E.g.:https://www.twitter.com/username'
                register={register}
                required={false}
            />
            <FormLabel
                type='url'
                name='linkedin'
                labelName='LinkedIn'
                placeholder='E.g.:https://www.linkedin.com/in/username'
                register={register}
                required={false}
            />
            <section> {component} </section>
        </section>
    );
};
