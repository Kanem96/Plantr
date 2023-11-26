"use client";
import React from "react";
import MobileSideBar from "./mobilesidebar";
import { useSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const { data: user } = useSession();
  console.log(user);
  return (
    <div className="p-4 border-b h-full flex items-center bg-lime-50 shadow-sm border-neutral-150">
      <MobileSideBar />
      <FaSearch className="ml-6" size={30} />
      <input className="ml-2 bg-lime-200 h-8 w-[60%] md:w-[500px] rounded"></input>
      <p className="absolute right-2 pr-2">{user?.user?.name}</p>
    </div>
  );
};

export default NavBar;
