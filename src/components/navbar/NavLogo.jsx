import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavLogo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-4 w-fit'>
            <Image src={'https://metalogic.com.np/metalogo.png'} alt='logo' width={48} height={48} />

            <h1 className='text-3xl font-bold text-primary tracking-widest'>MetaLogic</h1>
        </Link>
    )
}

export default NavLogo