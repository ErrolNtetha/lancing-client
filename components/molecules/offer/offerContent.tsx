import { format } from 'date-fns';
import React from 'react'
import { Separator } from '../../../@/components/ui/separator';

type OfferContentProps = {
    description: string | undefined;
    timeline: {
        startDate: Date | number;
        endDate: Date | number;
    };
    executiveSummary: string;
}

export default function OfferContent({ description, timeline, executiveSummary }: OfferContentProps) {
  return (
      <section className='my-4'>
          <section>
              <Separator />
              <span className='my-4'>
                  <h3 className='font-semibold'> Client Brief </h3>
                  <p className='line-clamp-3'> {description} </p>
              </span>
          </section>

          <section className='my-4'>
              <Separator />
              <span className='pt-2'>
                  <h3 className='font-semibold'> Expectations and Deliverables </h3>
                  <p className='line-clamp-3'> {executiveSummary} </p>
              </span>
          </section>

          <section className='my-4'>
              <Separator />
              <span className='mt-3'>
                  <h3 className='font-semibold'> Timeline and Deadlines </h3>
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
