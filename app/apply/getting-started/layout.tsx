'use client'

// import VendorRoute from '../../../auth/vendor/vendorRoute';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import '../../../styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = useProfileStore((state: any) => state.profile);

    return (
        <html>
            {/* <VendorRoute isClient={user?.isClient}> */}
                <head>
                    <title> Apply | Tedcrunch </title>
                    <meta property='og:title' content='Apply Now - Tedcrunch' />
                    <meta property='og:description' content='Create new application and start applying for available jobs. It is quick and easy.' />
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
                {/* </VendorRoute> */}
        </html>
    )
}
