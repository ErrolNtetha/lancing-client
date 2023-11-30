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
            <head>
                <title> Apply | Tedcrunch </title>
                <meta property='og:title' content='Create Application - Tedcrunch' />
                <meta property='og:description' content='Create a new application and start applying for available jobs. It is quick and easy.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
                <meta property='og:site_name' content='Tedcrunch South Africa' />
            </head>
            <body>
                <main className='p-3'>
                {children}
                </main>
            </body>
        </html>
    )
}
