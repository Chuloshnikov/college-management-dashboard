import React from 'react'

export default function StudentPage() {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      {/*LEFT*/}
      <div className='w-full xl:w-2/3'>
         <div className='h-full bg-white p-4 rounded-md'>
            <h2>Schedule (4A)</h2>
         </div>
      </div>
      {/*RIGHT*/}
        <div className='w-full xl:w-1/3'>

        </div>
    </div>
  )
}
