import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../@/components/ui/card';
import { formatAmount } from '../../../../utilities/format';
import PaymentButton from '../paystackButton';

type PaymentCardProps = {
    totalAmount: number;
}

export default function PaymentCard({ totalAmount }: PaymentCardProps) {
    const am = totalAmount * 20/100;

    return (
        <Card>
            <CardHeader>
                <CardTitle> Make Payment </CardTitle>
                <CardDescription> 
                    For this milestone, you are required to pay <span className='font-bold'> 20% </span> of {`${formatAmount(totalAmount)}`}. 
                </CardDescription>
            </CardHeader>
            <CardContent>
                <section>
                    Pay {`${formatAmount(am, '$,~')}`}
                </section>
            </CardContent>
            <CardFooter>
                <PaymentButton />
            </CardFooter>
        </Card>
    );
}
