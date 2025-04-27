import React from 'react'
import searchIcon from "../assets/WhiteSearchIcon.svg";
import CustomButton from './CustomButton';


const JobSearchBar = () => {
  return (
   <>
    <div className="flex flex-wrap items-center gap-2 bg-white p-4 rounded-lg xl:h-20 mt-5 ">
        <input
          type="text"
          placeholder="Job Title, Company, or Keywords"
          className="flex-1  px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select className=" px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500">
          <option className="text-gray-500">Select Location</option>
        </select>
        <select className=" px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500">
          <option>Job Type</option>
        </select>
        <div className="relative">
          <div className="absolute left-[16px] top-[15px] search">
            <img src={searchIcon} alt="searh icon" loading="lazy" />
          </div>
          <div className="">
            <CustomButton
              text="Search"
              color="text-white"
              fontSize="10px"
              bgColor="bg-primary"
              padding="px-10"
              width=""
              height="h-11"
              marginLeft="5px"
              borderRadius="rounded-xl"
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default JobSearchBar
