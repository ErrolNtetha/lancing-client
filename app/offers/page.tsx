import React from 'react';
import ListOffersCards from '../../components/organisms/vendor/offer/listOffers';

export default function OffersPage() {
  return (
      <section className='flex flex-col md:flex-row gap-3 p-3 md:container'>
          <head>
              <title> My Offers | Tedcrunch </title>
          </head>
          {/* Left column */}
          <ListOffersCards />

          {/* Right column */}
          <section className='hidden md:flex md:flex-1 items-center justify-center h-[90vh] p-3 border border-gray-200 rounded-md'>
              <p className='font-bold'> Select an offer on the left to view it. </p>
          </section>
      </section>
  );
};
