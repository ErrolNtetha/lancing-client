// import { FiUser } from 'react-icons/fi';
import '../../styles/globals.css';
// import logo from '../../public/assets/images/svg/blackLogo.svg';
// import Image from 'next/image';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head></head>
            <body>
                <main className='p-3'>
                {children}
                </main>
            </body>
        </html>
    )
}
