// import { FiUser } from 'react-icons/fi';
import '../../styles/globals.css';
import logo from '../../public/assets/images/svg/blackLogo.svg';
import Image from 'next/image';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head></head>
            <body>
                <main>
                <header className='container h-[5vh] p-2'> 
                    <section className='flex items-center justify-between'>
                        <Image width={90} height={50} alt='Company logo' src={logo} />
                    </section>
                </header>
                {children}
                </main>
            </body>
        </html>
    )
}
