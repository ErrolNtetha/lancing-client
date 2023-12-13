import React from 'react';

type OProps = {
    client: {
        names: {
            firstName: string;
            lastName: string;
        };
    } | undefined;
}

export default function OfferHeader({ client }: OProps) {
    return (
        <section>
            <span>
                <h4 className='font-semibold'> {client?.names?.firstName} {client?.names?.lastName} </h4>
            </span>
        </section>
    );
};
