import React from "react";
import FeaturedJobs from "./FeaturedJobs";
import RecomendedJobs from "./RecomendedJobs";
import LatestJobs from "./LatestJobs";
import JobSearchSection from "./JobSearchSection";

const JobsSection = () => {
  return (
    <div className=" xl:col-span-9 lg:col-span-9 md:col-span-12 sm:col-span-12 col-span-12  py-4 rounded-lg ">
     
      <JobSearchSection/>
      <FeaturedJobs /> 
      <RecomendedJobs />
      <LatestJobs />


    </div>
  );
};

export default JobsSection;
