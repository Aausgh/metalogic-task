
import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div className='h-screen flex flex-col gap-4 justify-center items-center '>
            <h1 className='text-5xl font-bold'>Navigate to Career Page</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-3xl'>
                <Link href={'/career'}>Go</Link>
            </button>
        </div>
    )
}

export default Home