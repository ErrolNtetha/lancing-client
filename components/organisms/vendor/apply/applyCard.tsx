import React from 'react';

type ApplyCardProps = {
    children: React.ReactNode;
}

function ApplyCard({ children }: ApplyCardProps) {
    return (
        <section className='max-w-xl p-3'>
            {children}
        </section>
    );
}

const ApplyTitle = ({ children }: ApplyCardProps) => <section className='text-gray-300 font-semibold text-md'>{children}</section>;
const ApplySubTitle = ({ children }: ApplyCardProps) => <section className='font-semibold text-2xl'>{children}</section>;
const ApplyDescription = ({ children }: ApplyCardProps) => <section className='text-md mb-4'>{children}</section>;
const ApplyContent = ({ children }: ApplyCardProps) => <section>{children}</section>;
const ApplyFooter = ({ children }: ApplyCardProps) => <section className='bg-background max-md:fixed left-0 bottom-0 gap-3 max-md:p-2 md:mt-4 w-full flex'>{children}</section>;

export {
    ApplyCard,
    ApplyTitle,
    ApplySubTitle,
    ApplyDescription,
    ApplyContent,
    ApplyFooter
};
