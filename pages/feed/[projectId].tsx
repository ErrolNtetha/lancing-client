import React from 'react';

type SProps = {
    params: {
        projectId: string;
    }
}

export async function getServerSideProps({ params }: SProps) {
    const  { projectId } = params;
    return {
        props: {
            projectId
        }
    }
};

const Project = ({ projectId }) => {
    console.log(projectId);
    return (
        <section>
            This is the project Id: {projectId}
        </section>
    );
};

export default Project;
