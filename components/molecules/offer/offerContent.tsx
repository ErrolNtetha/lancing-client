import { format } from 'date-fns';
import React from 'react'
import { Separator } from '../../../@/components/ui/separator';

type OfferContentProps = {
    description: string | undefined;
    startDate: {
        seconds: Date | number;
    }
    deadline: {
        seconds: Date | number;
    }
}

export default function OfferContent({ description, startDate, deadline }: OfferContentProps) {
  return (
      <section className='my-4'>
          <section>
              <Separator />
              <span className='my-4'>
                  <h3 className='font-semibold'> Description </h3>
                  <p className='whitespace-pre-line'> {description} </p>
              </span>
          </section>

          {/* <section className='my-4'>
              <Separator />
              <span className='pt-2'>
                  <h3 className='font-semibold'> Expectations and Deliverables </h3>
                  <p className='line-clamp-3'> {executiveSummary} </p>
              </span>
          </section> */}

          {/* <section className='my-4'>
              <Separator />
              <span className='mt-3'>
                  <h3 className='font-semibold'> Timeline and Deadlines </h3>
                  <p className='flex items-center justify-between'> 
                      <span> Begins </span>
                      <span className=''> 
                           {format(new Date(startDate?.seconds), 'dd MMMM yyy')} 
                      </span>
                  </p>
                  <p className='flex items-center justify-between'> 
                      <span> Deadline </span>
                      <span className=''>
                           {format(new Date(deadline?.seconds), 'dd MMMM yyy')} 
                      </span> 
                  </p>
              </span>
          </section> */}
      </section>
  )
}
