import React from "react";
import bookmarkIcon from "../assets/bookmark.svg";
import locationIcon from "../assets/location.svg";
import clockIcon from "../assets/time.svg";
import team from "../assets/Team.svg";
import CustomButton from "./CustomButton";

const Cards = ({ title, company, location, timeAgo, applicants, promoted }) => {
  return (
   <>
     {/* Card Content */}
    <div className="bg-white rounded-lg shadow-sm p-2 w-full  transition">
      {promoted && (
        <p className="text-xs font-semibold text-gray-800 mb-2">Promoted</p>
      )}

      <div className="flex items-center mb-3 ">
        <img src={team} alt="Company Logo" className="w-10 h-10 mr-2" />
        <div>
          <h3 className="font-medium tracking-wide text-xs">{title}</h3>
          <p className="text-xs tracking-wide text-gray-600">{company}</p>
        </div>
      </div>

      <div className="text-xs text-gray-500 space-y-1 mb-4 px-1">
        <div className="flex items-center gap-1">
          <img src={locationIcon} alt="" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={clockIcon} alt="" />
          <span>
            {timeAgo} |{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              {applicants} applicants
            </span>
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <CustomButton
          text="Apply Now"
          color="text-white"
          fontSize="text-xs"
          bgColor="bg-primary"
          padding="px-4 py-2"
          height="h-auto"
          marginLeft=""
          borderRadius="rounded-lg"
        />
        <img src={bookmarkIcon} alt="" className="w-5 h-5" />
      </div>
    </div>
    
    </>
  );
};

export default Cards;
