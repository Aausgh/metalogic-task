"use client"

import React, { useEffect, useState } from 'react'
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
            x: "-100vw",
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

        <>
            <motion.nav
                initial={{ y: "-20vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.08, 0.65, 0.53, 0.96] }}
                className='fixed top-0 z-[100] w-full items-center justify-between px-8 py-3 flex bg-tranparent backdrop-blur-md'>

                {/* Logo */}
                <NavLogo />

                {/* Links */}
                <div className='hidden lg:flex gap-8 font-semibold'>
                    {links.map((li, index) => (
                        <Link
                            key={index}
                            href={li.href}
                            className={` custom-link relative pb-1 ${pathName === li.href ? 'text-underline' : 'text-hover'}`}
                        >
                            {li.name}
                        </Link>
                    ))}
                </div>

                {/* Button */}
                <button className='hidden lg:flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-secondary-400 text-white '>
                    <Link href={'/contact'} className='relative pb-1'>
                        Get in Touch
                    </Link>
                </button>

                {/* Mobile Button */}
                <button className=' lg:hidden text-secondary-400' onClick={() => setIsOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth={2} strokelinecap="round" strokelinejoin="round" classname="lucide lucide-menu "><line x1={4} x2={20} y1={12} y2={12} /><line x1={4} x2={20} y1={6} y2={6} /><line x1={4} x2={20} y1={18} y2={18} /></svg>
                </button>

            </motion.nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        variants={navVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className='fixed top-0 z-[10000] h-screen w-screen bg-white pt-52 lg:hidden'
                    >

                        <button className='absolute right-6 top-4' onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth={2} strokelinecap="round" strokelinejoin="round" classname="lucide lucide-x "><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className=' text-md flex flex-col gap-8 items-center justify-center font-semibold'>
                            {links.map((li, index) => (
                                <Link
                                    key={index}
                                    href={li.href}
                                    className={` custom-link relative pb-1 ${pathName === li.href ? 'text-underline' : 'text-hover'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {li.name}
                                </Link>
                            ))}
                        </div>

                        <div className='flex justify-center items-center my-8'>

                            <button className='flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-blue-950 text-white hover:border-blue-950'>
                                <Link href={'/contact'} className='relative pb-1'>Get in Touch</Link>
                            </button>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Navbar