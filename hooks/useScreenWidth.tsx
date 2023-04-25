import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => updateScreenWdith);

        return () => window.removeEventListener('resize', () => updateScreenWdith);
    }, [screenWidth]);

    const updateScreenWdith = () => setScreenWidth(window.innerWidth);

    return screenWidth;
}
