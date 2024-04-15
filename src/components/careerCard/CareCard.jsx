import Image from 'next/image'
import React from 'react'

const CareCard = ({ c }) => {
    return (
        <div className='group flex h-[200px] w-[200px] flex-col items-start gap-3 rounded-2xl bg-white px-6 py-12 shadow-md'>

            <Image src={c.img} alt="" width={40} height={40} className='group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300' />

            <h3 className='font-semibold text-blue-950'>{c.title}</h3>
        </div>
    )
}

export default CareCard