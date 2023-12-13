'use client'

import ListOffersCards from '../../components/organisms/vendor/offer/listOffers';
import '../../app/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex flex-col md:flex-row gap-3 p-3 md:container'>
            {/* Left column */}
            <ListOffersCards />

            {/* Right column */}
            <section className='flex-1 border border-gray-200 rounded-md'>
                {children}
            </section>
        </main>
    )
}
