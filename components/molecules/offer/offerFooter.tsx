import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../../../@/components/ui/alert-dialog';
import { Button } from '../../../@/components/ui/button';

type FProps = {
    handleAcceptOffer: React.MouseEventHandler<HTMLButtonElement>;
    handleDeclineOffer: React.MouseEventHandler<HTMLButtonElement>;
};

export default function OfferFooter({ handleAcceptOffer, handleDeclineOffer }: FProps) {
    return (
        <div className='fixed flex items-center p-2 bg-background gap-2 w-full bottom-0 left-0'>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button type='button' variant='destructive' className='flex-1'>
                        Decline
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle> Are you sure? </AlertDialogTitle>
                        <AlertDialogDescription>
                            You are about to decline this offer. 
                            This action you are about to take cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeclineOffer}>
                            Yes, decline
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button type='button' className='flex-1'>
                        Accept
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle> Are you sure? </AlertDialogTitle>
                        <AlertDialogDescription>
                            Continuing means you understand and agree with all 
                            the requirements set out by the client. 
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleAcceptOffer}>
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};
