import React from "react";
import CustomButton from "./CustomButton";
import searchIcon from "../assets/WhiteSearchIcon.svg";
import { Tags } from "../utils";

const JobSearchSection = () => {
  return (
    <>
      {/* Main Heading */}
      <div className="">
        <h1 className="text-xl font-bold text-gray-800 text-2xl">
          Find your Dream Job, <span className="text-primary">Albert!</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </div>

      {/* Input Search Bar and Search Section */}
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

      {/* All Tags */}
      <div className="mt-4">
        <span className="text-sm text-gray-600 mr-2">Similar:</span>
        {Tags.map((tag, i) => (
          <button
            key={i}
            className="px-3 py-2 border border-gray-300 text-sm rounded text-gray-500 mr-2 hover:bg-gray-100"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Add Border  */}
      <div className="border-b-1 border-gray-200 mt-5"></div>
    </>
  );
};

export default JobSearchSection;
