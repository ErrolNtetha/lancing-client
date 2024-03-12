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
                <Toaster />
            </body>
        </html>
    )
}
