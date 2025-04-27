import React from "react";
import JobSearchSection from "./JobSearchSection";
import { featuredJobs, latestJobs, recomendedJobs } from "../utils";
import JobListings from "./JobsListings";

const JobsSection = () => {
  return (
    <div className=" xl:col-span-9 lg:col-span-9 md:col-span-12 sm:col-span-12 col-span-12  py-4 rounded-lg ">
     
      <JobSearchSection/>

      <JobListings title = {"Featured Jobs"} description = {"See Featured Jobs"} jobsData={featuredJobs} />
      <JobListings title = {"Recomended Jobs"} description = {"See Recomended Jobs"} jobsData={recomendedJobs} />
      <JobListings title = {"Latest Jobs"} description = {"See Latest Jobs"} jobsData={latestJobs} />


    </div>
  );
};

export default JobsSection;
