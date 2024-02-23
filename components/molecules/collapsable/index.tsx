'use client'

import React, { useState } from 'react';

interface IProps {
    children: string;
    end: number;
    className?: string;
    showSeeLess?: boolean;
}

export const Collapsable = ({
    children,
    end,
    className,
    showSeeLess = true
}: IProps) => {
    const text = children;
    const [seeMore, setSeeMore] = useState(true);
    const showLess = showSeeLess && 'see less';

    return (
        <span className={className}>
            { seeMore && (text?.length > end) ? text.slice(0, end).concat('...') : text }
            { text?.length > end
                && (
                    <button onClick={() => setSeeMore(!seeMore)} className='border-b text-foreground'>
                        {seeMore ? ' see more' : showLess}
                    </button>
                )}
        </span>
    );
};
