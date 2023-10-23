import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi'
import { MoonLoader } from 'react-spinners';
import z from 'zod';
import { Button } from '../../../../@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../@/components/ui/form';
import { Textarea } from '../../../../@/components/ui/textarea';
import { useToast } from '../../../../@/components/ui/use-toast';
import { db } from '../../../../firebaseConfig';
import { useAuth } from '../../../../hooks/useAuth';

type MessageProps = {
    names: {
        firstName: string;
        lastName: string;
    };
    uid: string;
}

const messageSchema = z.object({
    message: z
        .string({ required_error: 'Message is required.' })
        .min(2, 'Message should at least be 2 characters long.')
        .max(5000, 'Tooo many characters. Maximum is 5000.')
});

export default function SendMessage({ names, uid }: MessageProps) {
    const { currentUser } = useAuth();
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(messageSchema),
    });
    const handleMessageSubmit = async (data: any) => {
        setLoading(true);
        try {
            const messagesRef = collection(db, 'messages');
            await addDoc(messagesRef, {
                ...data,
                sender: doc(db, `users/${currentUser.uid}`),
                receiver: doc(db, `users/${uid}`),
                timestamp: serverTimestamp()
            });
            toast({
                className: 'bg-[green] text-white',
                title: 'Success',
                description: 'Message successfully sent.'
            });
        } catch (error) {
            console.log(error);
            toast({
                variant: 'destructive',
                title: 'Ops. Something went wrong.',
                description: 'There was a problem trying to send your message.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='outline' className='font-semibold w-full flex items-center gap-3 mt-4'> 
                    Direct Message
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Send Direct Message </DialogTitle>
                    <DialogDescription>
                        To: {names?.firstName} {names?.lastName}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleMessageSubmit)}>
                        <FormField
                            control={form.control}
                            name='message'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='message'> Message </FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder='Write a message...' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter className='mt-4'>
                            <Button type='submit' disabled={loading} className='bg-primary font-semibold w-full flex items-center gap-3'> 
                                {loading ? <MoonLoader size={20} color='white' /> : 'Send'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
