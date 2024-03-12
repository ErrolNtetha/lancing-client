import React from 'react'
import { Separator } from '../../../../../@/components/ui/separator'
import { Skeleton } from '../../../../../@/components/ui/skeleton'

export default function ProjectLoader() {
  return (
      <section className='space-y-4'>
          <Skeleton className='h-4 w-[200px]' />
          <Separator />
          <section className='space-y-1'>
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-[30%]' />
          </section>
      </section>
  )
}
