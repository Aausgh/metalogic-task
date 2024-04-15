import Image from 'next/image'
import React from 'react'

const BenefitsCard = ({ b }) => {
    return (
        <div className='group flex flex-col items-start gap-3 rounded-2xl p-4 hover:border-ui-500 hover:shadow-lg transition-all duration-300'>

            <Image src={b.img} alt='' width={40} height={40} className='group-hover:scale-110 transition-all duration-300' loading='lazy' />

            <h3 className='text-xl font-bold text-blue-950'>{b.title}</h3>

            <p className='text-sm text-ui-500'>{b.desc}</p>
        </div>
    )
}

export default BenefitsCard