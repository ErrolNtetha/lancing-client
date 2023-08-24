import React from 'react';
import Image from 'next/image';

export const Features = () => {
    return (
        <section className='w-full md:flex items-center justify-center py-6 bg-white h-full md:h-screen'>
            <section className='container'>
                <aside className='text-black max-w-30 m-8'>
                    <h4 className='text-md md:text-lg font-bold opacity-30'> What Sets Us Apart </h4>
                    <h1 className='max-w-md font-extrabold text-black text-2xl mb-2'>
                        Our platform stands out for a several reasons
                    </h1>
                    <section className='w-full text-sm mb-8 md:text-md'> 
                        <p className='md:max-w-md'>At Duello, we are not just another freelancing platform; we are a community of dreamers and doers.</p>
                        <br />
                        <br />
                        <ul className='flex flex-col md:flex md:flex-row gap-4'>
                            <li className='flex flex-col items-center border border-gray p-3'>
                                <section className='w-[200px] h-[200px]'>
                                    <Image src='/assets/images/svg/collab.svg' alt='Screenshots of clients looking for freelancers' width={200} height={400} />
                                </section>
                                <section>
                                    <h4 className='text-md md:text-lg font-bold'> Tailored Collaborations </h4>
                                    <p> 
                                        We believe that every project is unique. That is why we are committed to matching freelancers 
                                        with the right skills to clients who appreciate their expertise, ensuring projects are successful 
                                        from the start.
                                    </p>
                                </section>
                            </li>
                            <li className='flex flex-col items-center border border-gray p-3'>
                                <section className='w-[200px] h-[200px]'>
                                    <Image src='/assets/images/svg/milestones.svg' alt='Screenshots of clients looking for freelancers' width={200} height={200} />
                                </section>
                                <section>
                                    <h4 className='text-md md:text-lg font-bold'> Project Milestones </h4>
                                    <p> 
                                        We understand the value of progress. With our milestone-based approach, projects are broken down into manageable 
                                        phases, ensuring transparency, accountability, and timely deliveries.
                                    </p>
                                </section>
                            </li>
                            <li className='flex flex-col items-center border border-gray p-3'>
                                <section className='w-[200px] h-[200px]'>
                                    <Image src='/assets/images/svg/support.svg' alt='Screenshots of clients looking for freelancers' width={200} height={200} />
                                </section>
                                <section>
                                    <h4 className='text-md md:text-lg font-bold'> Exceptional Support </h4>
                                    <p> 
                                        We are here for you every step of the way. Our dedicated support team is ready to assist you, 
                                        whether you are a freelancer looking to showcase your skills or a client in search of the 
                                        perfect collaborator.
                                    </p>
                                </section>
                            </li>
                            <li className='flex flex-col items-center border border-gray p-3'>
                                <section className='w-[200px] h-[200px]'>
                                    <Image src='/assets/images/svg/hub.svg' alt='Screenshots of clients looking for freelancers' width={200} height={200} />
                                </section>
                                <section>
                                    <h4 className='text-md md:text-lg font-bold'> Innovation Hub </h4>
                                    <p> 
                                        Duello is not just a platform; It is a hub for innovation. From creative challenges to skill-building resources, 
                                        we are committed to fostering a culture of continuous growth.
                                    </p>
                                </section>
                            </li>
                        </ul>
                    </section>
                </aside>
            </section>
        </section>
    )
}
