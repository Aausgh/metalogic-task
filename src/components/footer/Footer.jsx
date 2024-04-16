import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerServices } from '../careerCard/constant'

const Footer = () => {
    return (
        <div className='z-50 w-full bg-blue-950 px-4 pb-8 pt-24 text-white md:px-16'>
            <div className='flex flex-col justify-between gap-y-8 xl:flex-row'>

                <div className='flex flex-col items-start gap-4 md:flex-row lg:gap-2'>

                    <div className='mt-8 flex items-start justify-start gap-2 md:mt-0'>
                        <Image
                            src={'https://metalogic.com.np/metalogo.png'}
                            alt='logo'
                            width={48}
                            height={48}
                        />

                        <h1 className='flex flex-col text-2xl font-bold md:hidden mb-4'>
                            Metalogic
                            <span className='text-xs font-normal'>
                                Software Private Limited
                            </span>
                        </h1>
                    </div>

                    <div className='flex w-full flex-col justify-between md:flex-row xl:flex-col'>

                        <h1 class="mb-4 hidden md:block ">
                            <span class="text-3xl font-semibold tracking-widest">
                                MetaLogic
                            </span>

                            <br />

                            <span class="text-sm ">
                                Software Private Limited
                            </span>
                        </h1>

                        <ul class="flex flex-col gap-2 text-sm">
                            <li class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin "><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx={12} cy={10} r={3} /></svg>

                                Saptakhel, Lalitpur (Head office)
                            </li>

                            <li class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone "><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>

                                + 977 9851353599
                            </li>

                            <li class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail "><rect width={20} height={16} x={2} y={4} rx={2} /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>

                                info@metalogic.com.np
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-y-8 md:mx-auto md:flex-row md:gap-8 lg:gap-16 xl:mx-0'>

                    <div>
                        <h3 className='mb-2 font-semibold'>Company</h3>
                        <ul className='flex flex-col gap-2 text-xs'>
                            <li>
                                <Link href={'/contact'}>Feedback</Link>
                            </li>

                            <li>
                                <Link href={'/contact/partner'}>Partnership</Link>
                            </li>

                            <li>
                                <Link href={'/'}>Terms and Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="mb-2 font-semibold">Services</h3>
                        <ul class="flex flex-col gap-2 text-xs">
                            {footerServices.map((s) => (
                                <li key={s.id}>
                                    <Link href={s.link}>
                                        {s.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-2 font-semibold'>Join</h3>

                        <ul className='flex flex-col gap-2 text-xs'>
                            <li>
                                <Link href={'/careers'}>Careers at MetaLogic</Link>
                            </li>

                            <li>
                                <Link href={'/career'}>Internships</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='mb-2 font-semibold'>
                            Join us on Social Medias
                        </h3>

                        <ul className='flex gap-4 text-sm'>
                            <li className='rounded-full border-2 p-2'>
                                <Link href={'https://www.whatsapp.com'}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height={20} width={20} xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                </Link>
                            </li>

                            <li className='rounded-full border-2 p-2'>
                                <Link href={'https://www.facebook.com'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook "><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </Link>
                            </li>


                            <li className='rounded-full border-2 p-2'>
                                <Link href={'https://www.instagram.com'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram "><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </Link>
                            </li>

                            <li className='rounded-full border-2 p-2'>
                                <Link href={'https://www.linkedin.com'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin "><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width={4} height={12} x={2} y={9} /><circle cx={4} cy={4} r={2} /></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-8 flex flex-col gap-y-2 text-sm md:flex-row">
                <span> @Copyright  2024 MetaLogic. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer