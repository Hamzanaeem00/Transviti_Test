import React from "react";
import { stats } from "../utils";

const StatsCard = () => {


  return (
    <div className="bg-white mt-3 rounded-lg  p-4 text-lg">
      {stats.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between text-sm py-2">
            <span className="text-gray-800">{item.label}</span>
            <span className="text-blue-600 font-medium">{item.value}</span>
          </div>
          {index < stats.length - 1 && <hr className="border-t border-gray-200" />}
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
