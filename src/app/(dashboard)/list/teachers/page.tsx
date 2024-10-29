import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import React from 'react'

export default function TeacherList() {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        <div className='flex items-center justify-between'>
            <h2 className='hidden md:block text-lg font-semibold'>All Teachers</h2>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <TableSearch/>
                <div className=''>
                    <button>
                        <Image src="/filter.png" alt="" width={14} height={14}/>
                    </button>
                </div>
            </div>
        </div>
        <div className=''></div>
        {/*LIST*/}
        <div className=''></div>
        {/*PAGINATION*/}
        <div className=''></div>
    </div>
  )
}
