import React from 'react'
import Cards from './Cards'

const JobListings = ({title, description, jobsData}) => {
  return (
    <div className="mt-5">

      {/* Job Section Type  */}
    <div className="flex justify-start items-center mb-4">
      <h2 className=" font-normal text-lg tracking-wide text-gray-800">{title}</h2>
      <a href="#" className="text-sm text-primary mx-5 underline">{description}</a>
    </div>
    
       {/* Jobs Cards  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {jobsData.map((job, index) => (
        <Cards key={index} {...job} />
      ))}
    </div>

  {/* Border  */}

    <div className="border-b-1 border-gray-200 mt-5"></div>

  </div>
  )
}

export default JobListings
