import Pagination from '@/components/Pagination'
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
                <div className='flex items-center gap-4 self-end'>
                    <button className='w-8 h-8 flex items-center justify-center rounded-full bg-third'>
                        <Image src="/filter.png" alt="" width={14} height={14}/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center rounded-full bg-third'>
                        <Image src="/sort.png" alt="" width={14} height={14}/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center rounded-full bg-third'>
                        <Image src="/plus.png" alt="" width={14} height={14}/>
                    </button>
                </div>
            </div>
        </div>
        <div className=''></div>
        {/*LIST*/}
        
        {/*PAGINATION*/}
        <Pagination/>
    </div>
  )
}