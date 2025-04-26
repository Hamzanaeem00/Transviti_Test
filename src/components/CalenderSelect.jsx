import React from "react";
import ChevronDownIcon from '../assets/ChevronDownIcon.svg'

const CalendarSelect = () => {

  const options = ["Upcoming Interviews", "Past Interviews", "All Events"];

  return (
    <div className="bg-white p-4 rounded-xl mt-3 ">
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        My calendar
      </label>
      <div className="relative flex">
        <select
          value="Upcoming Interviews"
          className="w-full appearance-none bg-transparent text-sm text-gray-500 pr-8 cursor-pointer focus:outline-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="text-gray-700">
              {option}
            </option>
          ))}
        </select>
        <img className="absolute top-[-6px] right-0" src={ChevronDownIcon} alt="down" />
      </div>
    </div>
  );
};

export default CalendarSelect;
