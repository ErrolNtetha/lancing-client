import { format } from 'date-fns';
import React from 'react'
import { Separator } from '../../../@/components/ui/separator';

type OfferContentProps = {
    description: string | undefined;
    timeline: {
        startDate: Date | number;
        endDate: Date | number;
    };
}

export default function OfferContent({ description, timeline }: OfferContentProps) {
  return (
      <section className='mt-3'>
          <section>
              <Separator />
              <span className='mt-3 mb-1'>
                  <h3 className='font-semibold'> Project Details </h3>
                  <p className='line-clamp-3'> {description} </p>
              </span>
          </section>

          <section className='mt-3 mb-1'>
              <Separator />
              <span className='mt-3'>
                  <h3 className='font-semibold'> Timeline and Deadlines </h3>
                  <p className='text-gray-500'> These are project estimations dates. </p>
                  <p className='flex items-center justify-between'> 
                      <span> Begins </span>
                      <span className=''> 
                           {format(new Date(timeline?.startDate!), 'dd MMMM yyy')} 
                      </span>
                  </p>
                  <p className='flex items-center justify-between'> 
                      <span> Deadline </span>
                      <span className=''>
                           {format(new Date(timeline?.endDate), 'dd MMMM yyy')} 
                      </span> 
                  </p>
              </span>
          </section>
      </section>
  )
}
