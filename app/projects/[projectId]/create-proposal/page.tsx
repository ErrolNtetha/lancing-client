// import Head from 'next/head';
import React from 'react';
import ProposalLayout from '../../../../components/templates/projects/projectId/create-proposal';
import { COMPANY_NAME } from '../../../../constants/companyName';

export default function CreateProposalPage() {
    return (
        <React.Fragment>
            <head>
                <title> Create Proposal | {COMPANY_NAME} </title>
            </head>
            <ProposalLayout />
        </React.Fragment>
    );
}
