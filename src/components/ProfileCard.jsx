import React from "react";
import DisplayPicture from "../assets/DisplayPicture.svg";

const ProfileCard = () => {
  return (
    <>
      <div className="bg-white rounded-xl ">
        {/* User Cover image */}
        <div className="h-24 w-full bg-cover bg-center banner-cover rounded-tl-xl  rounded-tr-xl  "></div>
        {/* User Profile image */}
        <div className="flex justify-center -mt-12">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-white"
            src={DisplayPicture}
            alt="Profile"
            loading="lazy"
          />
        </div>
        {/* Content of User */}
        <div className="text-center px-6 py-1">
          <h2 className="text-lg font-bold text-gray-800 tracking-wide">
            Albert Flores
          </h2>
          <p className="text-sm text-gray-800  leading-tight tracking-wide">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="text-sm text-gray-500 mt-2 tracking-wide">
            Clinton, Maryland
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
