import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/organisms/header/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
