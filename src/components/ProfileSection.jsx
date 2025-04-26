import React from "react";
import StatsCard from "./StatsCards";
import CalendarSelect from "./CalenderSelect";
import ProfileCard from "./ProfileCard";

const ProfileSection = () => {
  return (
    <>
      <div className="xl:col-span-3 lg:col-span-3 md:col-span-12 sm:col-span-12 col-span-12">
          <ProfileCard />
          <StatsCard />
          <CalendarSelect />
      </div>
    </>
  );
};

export default ProfileSection;
