import Link from 'next/link'
import React from 'react'

const VacancyTable = ({ v }) => {
    return (
        <table className='w-full text-sm'>
            <tbody>
                <tr className='border-b hover:bg-gray-50'>
                    <td className='p-2 font-semibold  w-[28%]'>
                        {v.title}
                        <br />
                        <span className='text-sm font-normal text-blue-500'>
                            ({v.nofapp} applicants)
                        </span>
                    </td>

                    <td className='p-2 text-center'>
                        {v.type}
                    </td>

                    <td className='p-2 w-[40%]'>
                        {v.location}
                    </td>

                    <td className='p-2 text-right w-1/6'>
                        {v.status === "Opened" ? (
                            <button className='h-10 px-8 rounded-md border border-red-600 text-red-600 shadwo-sm text-sm font-medium'>
                                <Link href={'/career'}>Apply</Link>
                            </button>
                        ) : (
                            <span className='flex items-center justify-center gap-1 rounded-full bg-red-100 px-2 py-1 font-medium text-red-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot "><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={1} /></svg>
                                Closed
                            </span>
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default VacancyTable