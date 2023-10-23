import React from 'react'
import VendorSidebar from './introSidebar'
import Navigation from './navigation'

export default function ProfilePage() {
  return (
      <section className='m-3 md:flex md:container gap-4'>
          <section className='md:flex-[0.3] border border-gray-100 max-h-max rounded-md'>
              <VendorSidebar />
          </section>
          <section className='flex-1 border border-gray-100 rounded-md'>
              <Navigation />
          </section>
      </section>
  )
}
