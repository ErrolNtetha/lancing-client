import React from 'react';
import { FiGrid, FiHelpCircle, FiPower, FiSettings } from 'react-icons/fi';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../../@/components/ui/dropdown-menu';
import { Separator } from '../../../@/components/ui/separator';
import { Avatar } from '../../molecules/image';

type UserHeadProps = {
    avatar: string;
    names: {
        firstName: string;
        lastName: string;
    }
    isClient: boolean;
}


export const UserHead = ({ avatar, names, isClient }: UserHeadProps) => {
    const [dropdown, setDropdown] = React.useState(false);
    const accountType = isClient ? 'Client Account' : 'Freelancer Account';
    const handleDropdownToggle = () => setDropdown(!dropdown);

    return (
        <section className='relative hidden md:flex items-center justify-center gap-3'>
            <Avatar
                src={avatar}
                size='w-8 h-8'
                alt='My avatar'
            />
            {/* <FiGrid className='text-[1.4rem] hover:cursor-pointer' onClick={handleDropdownToggle} />
            {dropdown && (
                <section className='absolute bg-background shadow-md top-[6vh] border border-gray-300 right-0 h-max w-[200px] rounded-md'>
                    <ul className='divide-y divide-gray-300 text-sm'>
                        <li className='flex items-center gap-2 p-2'>
                            <span>
                                <h6 className='font-semibold'> {names?.firstName} {names?.lastName} </h6>
                                <p className='text-[green]'> R3, 245.93 </p>
                            </span>
                        </li>
                        <li className='flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-gray-200'> <FiHelpCircle className='ml-2 h-4 w-4' /> FAQ</li>
                        <li className='flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-gray-200'> <FiSettings className='ml-2 h-4 w-4' /> Settings </li>
                        <li className='flex items-center gap-2 p-2 hover:cursor-pointer hover:bg-gray-200'> <FiPower className='ml-2 h-4 w-4' /> Logout </li>
                    </ul>
                </section>
            )} */}

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <FiGrid className='hover:cursor-pointer text-[1.4rem]' />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=''>
                    <DropdownMenuLabel> My Account </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <FiHelpCircle className='mr-2 h-4 w-4' />
                            <span> FAQ </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FiSettings className='mr-2 h-4 w-4' />
                            <span> Settings </span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <FiPower className='mr-2 h-4 w-4' />
                        <span> Logout </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    );
};
