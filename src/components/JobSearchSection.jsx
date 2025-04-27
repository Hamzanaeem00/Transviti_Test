import React from "react";
import SimliarTags from "./SimilarTags";
import JobHeaderText from "./JobHeaderText";
import JobSearchBar from "./JobSearchBar";

const JobSearchSection = () => {
  return (
    <>
      <JobHeaderText />
      <JobSearchBar />
      <SimliarTags />

      {/* Add Border  */}
      <div className="border-b-1 border-gray-200 mt-5"></div>
    </>
  );
};

export default JobSearchSection;
