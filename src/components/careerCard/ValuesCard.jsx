import Image from 'next/image'
import React from 'react'

const ValuesCard = ({ v }) => {
    return (
        <div className='group w-[360px] h-[280px] flex flex-col items-start gap-3 rounded-2xl bg-white p-8 shadow-lg'>

            <div className='w-16 rounded-2xl bg-gray-100 p-4'>
                <Image
                    src={v.img}
                    alt=''
                    width={128}
                    height={128}
                    loading='lazy'
                    className='transition-all duration-300 group-hover:-rotate-12'
                />
            </div>

            <h3 className='text-xl font-bold text-blue-950'>
                {v.title}
            </h3>

            <p className='text-sm text-ui-500'>
                {v.desc}
            </p>
        </div>
    )
}

export default ValuesCard