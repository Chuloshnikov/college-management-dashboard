import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
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
                        <Image 
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                        alt="photo" 
                        width={144} 
                        height={144} 
                        className='w-36 h-36 rounded-full object-cover'
                        />
                    </div>
                    <div className='w-2/3 flex flex-col justify-between gap-4'>
                        <h2 className='text-xl font-semibold'>Leonard Snyder</h2>
                        <p className='text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>A+</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/date.png" alt="" width={14} height={14}/>
                                <span>January 2025</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/mail.png" alt="" width={14} height={14}/>
                                <span>user@gmail.com</span>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src="/phone.png" alt="" width={14} height={14}/>
                                <span>+1 234 567</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SMALL CARDS */}
                <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                    {/* CARD */}
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image 
                        src="/singleAttendance.png" 
                        alt="attendance" 
                        width={24} 
                        height={24} 
                        className='w-6 h-6'
                        />
                        <div className=''>
                            <h3 className='text-xl font-semibold'>90%</h3>
                            <span className='text-sm text-gray-400'>
                                Attendance
                            </span>
                        </div>
                    </div>
                      {/* CARD */}
                      <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image 
                        src="/singleBranch.png" 
                        alt="attendance" 
                        width={24} 
                        height={24} 
                        className='w-6 h-6'
                        />
                        <div className=''>
                            <h3 className='text-xl font-semibold'>2</h3>
                            <span className='text-sm text-gray-400'>
                            Branches
                            </span>
                        </div>
                    </div>
                      {/* CARD */}
                      <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image 
                        src="/singleLesson.png" 
                        alt="lesson" 
                        width={24} 
                        height={24} 
                        className='w-6 h-6'
                        />
                        <div className=''>
                            <h3 className='text-xl font-semibold'>6</h3>
                            <span className='text-sm text-gray-400'>
                                Lessons
                            </span>
                        </div>
                    </div>
                    {/* CARD */}
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image 
                        src="/singleClass.png" 
                        alt="class" 
                        width={24} 
                        height={24} 
                        className='w-6 h-6'
                        />
                        <div className=''>
                            <h3 className='text-xl font-semibold'>6</h3>
                            <span className='text-sm text-gray-400'>
                                Classes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*BOTTOM*/}
            <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                <h3>Teacher&apos;s Schedule</h3>
                <BigCalendar/>
            </div>
        </div>
        {/*RIGHT*/}
        <div className='w-full xl:w-1/3 flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-md'>
                <h3 className='text-xl font-semibold'>
                    Shortcuts
                </h3>
                <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                    <Link className='p-3 rounded-md bg-permanentLight' href={"/"}>Teacher&apos;s Classes</Link>
                    <Link className='p-3 rounded-md bg-secondaryLight' href={"/"}>Teacher&apos;s Students</Link>
                    <Link className='p-3 rounded-md bg-thirdLight' href={"/"}>Teacher&apos;s Lessons</Link>
                    <Link className='p-3 rounded-md bg-pink-50' href={"/"}>Teacher&apos;s Exams</Link>
                    <Link className='p-3 rounded-md bg-permanentLight' href={"/"}>Teacher&apos;s Assignments</Link>
                </div>
            </div>
            <Performance/>
            <Announcements/>
        </div>
    </div>
  )
}
