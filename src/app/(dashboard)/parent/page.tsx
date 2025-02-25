"use client"

import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import React from 'react'

export default function ParentPage() {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/*LEFT*/}
      <div className='w-full xl:w-2/3'>
         <div className='h-full bg-white p-4 rounded-md'>
            <h2 className='text-xl font-semibold'>Schedule (John Doe)</h2>
            <BigCalendar/>
         </div>
      </div>
      {/*RIGHT*/}
        <div className='w-full xl:w-1/3'>
          <Announcements/>
        </div>
    </div>
  )
}
