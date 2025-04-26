import React from 'react'
import JobsSection from '../../components/JobsSection'
import ProfileSection from '../../components/ProfileSection'

const FindJobs = () => {
  return (
    <div className='container mt-5 mx-auto'>
         <div className=' grid gap-8 grid-cols-12' >
        <ProfileSection />
        <JobsSection />
    </div>

    </div>

  )
}

export default FindJobs