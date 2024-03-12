import React from 'react';
import { PaystackButton } from 'paystack-react';
import { Button } from '../../../../@/components/ui/button';

export default function PaymentButton() {
    const handlePayStackSuccessAction = (reference: string): void => console.log(reference);
    const handlePaystackCloseAction = () => console.log('closed');

    const config = {
        reference: (new Date()).getTime().toString(),
        email: 'mphumeleli@example.com',
        amount: 11400,
        publicKey: 'xxxxx-xxxx-xx'
    }

    const componentProps = {
        ...config,
        text: 'Pay Now',
        onSuccess: (reference: string) => handlePayStackSuccessAction(reference),
        onClose: handlePaystackCloseAction
    }

  return (
      <Button className='w-full' asChild>
          <PaystackButton {...componentProps} />
      </Button>
  )
}
