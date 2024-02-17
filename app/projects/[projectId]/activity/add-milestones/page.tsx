import React from 'react'
import AddMilestones from '../../../../../components/templates/projects/projectId/activity/add-milestones';
import { COMPANY_NAME } from '../../../../../constants/companyName';

export default function AddMilestonesPage() {
    return (
        <section className='p-3 md:container'>
            <head>
                <title> Add Milestones | {COMPANY_NAME} </title>
            </head>
            <AddMilestones />
        </section>
    );
};
