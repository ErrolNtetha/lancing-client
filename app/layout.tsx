import { Header } from '../components/organisms/header/header';
import '../app/globals.css';

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
            </body>
        </html>
    )
}
