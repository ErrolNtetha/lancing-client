'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../@/components/ui/tabs'
import VendorEducation from '../../organisms/vendor/profile/navigation/education'
import VendorExperience from '../../organisms/vendor/profile/navigation/experience'
import VendorPortfolio from '../../organisms/vendor/profile/navigation/portfolio'
import VendorReviews from '../../organisms/vendor/profile/navigation/reviews'

type VendorProps = {
    vendor: any;
}

export default function Navigation({ vendor }: VendorProps) {
    const { experience } = vendor;
    return (
        <Tabs defaultValue='portfolio' className='w-full'>
            <TabsList className='w-full divide-x justify-start md:justify-evenly overflow-x-hidden'>
                <TabsTrigger value='portfolio'> Portfolio </TabsTrigger>
                <TabsTrigger value='work'> Work Experience </TabsTrigger>
                <TabsTrigger value='education'> Education </TabsTrigger>
                <TabsTrigger value='reviews'> Reviews </TabsTrigger>
            </TabsList>
            <TabsContent value='portfolio'>
                <VendorPortfolio />
            </TabsContent>
            <TabsContent value='work'>
                <VendorExperience experience={experience} />
            </TabsContent>
            <TabsContent value='education'>
                <VendorEducation />
            </TabsContent>
            <TabsContent value='reviews'>
                <VendorReviews />
            </TabsContent>
        </Tabs>
    )
}