import ListOffersCards from '../../components/organisms/vendor/offer/listOffers';
import '../../app/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex gap-3 p-3 md:container'>
            <ListOffersCards />
            <section className='flex-1 border border-gray-200 rounded-md'>
                {children}
            </section>
        </main>
    )
}
