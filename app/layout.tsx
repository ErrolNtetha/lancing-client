import { Header } from '../components/organisms/header/header';
import '../app/globals.css';
import { Toaster } from '../@/components/ui/toaster';
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/organisms/theme-provider';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={inter.className}>
            <head>
                <title> Find Freelancers for Your Project | Tedcrunch </title>
                <meta property='og:title' content='Find Freelancers in South Africa - Tedcrunch' />
                <meta property='og:description' content='Tedcrunch is a South African freelance marketplace for businesses or individuals to find highly skilled freelancers.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content='/assets/images/seo/logo.png' />
                <meta property='og:url' content='https://www.tedcrunch.co.za' />
                <meta property='twitter:card' content='summary_large_image' />
            </head>
            <body>
                <Header />
                <ThemeProvider 
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                {children}
                <Toaster />
            </body>
        </html>
    )
}
