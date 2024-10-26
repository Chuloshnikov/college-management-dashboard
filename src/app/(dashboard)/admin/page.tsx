import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='p-4 flex gap-4 flex-col md;flex-row'>
      {/*LEFT*/}
      <div className='w-full lg:w-2/3'>
          {/*USER CARDS*/}
          <div className='flex gap-4 justify-between flex-wrap'>
              <UserCard type="student"/>
              <UserCard type="teacher"/>
              <UserCard type="parent"/>
              <UserCard type="staff"/>
          </div>
          {/*MIDDLE CHARTS*/} 
          <div className='flex gap-4 flex-col lg:flex-row'>
            {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart/>
          </div>
            {/*ATTENDANCE CHART*/}
            <div className='w-full lg:w-2/3 h-[450px]'></div>
          </div>
          <div className=''></div>
      </div>
      {/*RIGHT*/}
      <div className='w-full lg:w-1/3'>
      </div>
    </div>
  )
}
