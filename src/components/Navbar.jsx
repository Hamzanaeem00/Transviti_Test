import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Input,
  Avatar,
} from "@material-tailwind/react";

import logo from "../assets/Logo.svg";
import searchIcon from "../assets/search.svg";
import profile from "../assets/profile.svg";

import CustomButton from "./CustomButton";

export function NavbarHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  
  //Navbar  List 
  const navList = (
    <ul className=" font-normal text-nav-text mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 "
      >
        <a href="#" className="flex items-center text-primary font-semibold">
          Find Jobs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1"
      >
        <a href="#" className="flex items-center">
          Top Companies
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 "
      >
        <a href="#" className="flex items-center">
          Job Tracker
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1"
      >
        <a href="#" className="flex items-center">
          My Calender
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1"
      >
        <a href="#" className="flex items-center">
          Documents
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1"
      >
        <a href="#" className="flex items-center">
          Messages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1"
      >
        <a href="#" className="flex items-center">
          Notifications
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="text-black bg-white px-4 py-2 lg:px-8 lg:py-4 border-0 rounded-xs">
      <div className="container mx-auto">
        <div className="  flex flex-wrap items-center justify-around text-blue-gray-900">
          <div>
            <img src={logo} alt="Logo " loading="lazy" className="mr-5 " />
          </div>

          <div className="hidden lg:block">{navList}</div>

          <div className="hidden items-center gap-x-2 lg:flex">
            <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className:
                    "  min-w-[255px] text-black h-11 bg-search rounded-xl ",
                }}
                className=" border-0  !border-t-blue-gray-300 h-11 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="absolute left-[10px] top-[14px] search">
                <img src={searchIcon} alt="searh icon" loading="lazy" />
              </div>
            </div>
            
            <CustomButton
              text="Resume Builder"
              color="text-white"
              fontSize="10px"
              bgColor="bg-primary"
              padding="px-4"
              width=""
              height="h-11"
              borderRadius="rounded-xl"
            />
          </div>

          <div>
            <Avatar
              variant="circular"
              size="md"
              className=" rounded-full"
              src={profile}
            />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

       {/* For Mobile Screens  */}
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[260px]  rounded-xl bg-search",
                }}
                className=" rounded-xl h-10  !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 border-0 bg-search"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[12px] h-11 ">
                <img src={searchIcon} alt="searh icon" loading="lazy" />
              </div>
            </div>
            <CustomButton
              text="Resume Builder"
              color="text-white"
              fontSize="10px"
              bgColor="bg-primary"
              padding="px-4"
              width=""
              height="h-11"
              borderRadius="rounded-xl"
            />
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
