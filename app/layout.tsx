import { Header } from '../components/organisms/header/header';
import '../app/globals.css';
import { Toaster } from '../@/components/ui/toaster';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head></head>
            <body>
                <Header />
                {children}
                <Toaster />
            </body>
        </html>
    )
}
