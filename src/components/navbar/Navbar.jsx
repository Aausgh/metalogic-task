"use client"

import React, { useState } from 'react'
import "./navbar.css";
import NavLogo from './NavLogo'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Career", href: "/career" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about-us" },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const pathName = usePathname()

    const navVariants = {
        closed: {
            x: "-100%",
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.08, 0.65, 0.53, 0.96]
            }
        },
        opened: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.08, 0.65, 0.53, 0.96]
            }
        },
    };

    return (
        <div className='bg-tranparent w-screen h-20 backdrop-blur-md'>

            <motion.nav
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.08, 0.65, 0.53, 0.96] }}
                className='fixed top-0 z-[1000] hidden w-full items-center justify-between  px-8 py-3 lg:flex'>

                {/* Logo */}
                <NavLogo />

                <div className='flex gap-8 font-semibold'>
                    {links.map((li) => (
                        <Link
                            href={li.href}
                            className={` custom-link relative pb-1 ${pathName === li.href ? 'text-underline' : 'text-hover'}`}
                        >
                            {li.name}
                        </Link>
                    ))}
                </div>

                <button className='inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-secondary-400 text-white '>
                    <Link href={'/contact'} className='relative pb-1'>
                        Get in Touch
                    </Link>
                </button>

            </motion.nav>


            {/* Mobile Navbar */}
            <div className='absolute z-[100] flex w-full items-center justify-between p-4 lg:hidden'>

                {/* Logo */}
                <NavLogo />


                <button className=' text-secondary-400' onClick={() => setIsOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu "><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                </button>

            </div>

            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        variants={navVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className='fixed z-[100] h-screen w-screen bg-white pt-52 xl:hidden'
                    >

                        <button className='absolute right-6 top-4' onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x "><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        </button>

                        <div className=' text-md flex flex-col gap-8 items-center justify-center font-semibold'>
                            {links.map((li) => (
                                <Link
                                    href={li.href}
                                    className={` custom-link relative pb-1 ${pathName === li.href ? 'text-underline' : 'text-hover'}`}
                                >
                                    {li.name}
                                </Link>
                            ))}
                        </div>


                        <div className='flex justify-center items-center my-8'>

                            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50  h-9 px-4 py-2 bg-primary text-white hover:border-primary/90'>
                                <Link href={'/contact'} className='relative pb-1'>Get in Touch</Link>
                            </button>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Navbar