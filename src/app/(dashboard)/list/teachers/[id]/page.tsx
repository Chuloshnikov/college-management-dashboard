import Image from 'next/image'
import React from 'react'

export default function SingleTeacher() {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col xl:flex-row'>
        {/* LEFT */}
        <div className='w-full xl:w-2/3'>
        {/*TOP*/}
            <div className='flex flex-col lg:flex-row gap-4'>
                {/* USER INFO CARD */}
                <div className='bg-permanent py-6 px-4 rounded-md flex-1 flex gap-4'>
                    <div className='w-1/3'>
                        <Image src="" alt="" width={144} height={144} className='w-36 h-36 rounded-full object-cover'/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-between gap-4'>
                        <h2 className='text-xl font-semibold'>Leonard Snyder</h2>
                        <p className='text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                            <div className='w-full md:w-1/3 flex items-center gap-2'>
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>A+</span>
                            </div>
                            <div className='w-full md:w-1/3 flex items-center gap-2'>
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>January 2025</span>
                            </div>
                            <div className='w-full md:w-1/3 flex items-center gap-2'>
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>user@gmail.com</span>
                            </div>
                            <div className='w-full md:w-1/3 flex items-center gap-2'>
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>+1 234 567</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SMALL CARDS */}
                <div className='flex-1'>

                </div>
            </div>
            {/*BOTTOM*/}
            <div className=''>Schedule</div>
        </div>
        {/*RIGHT*/}
        <div className='w-full xl:w-1/3'></div>
    </div>
  )
}
