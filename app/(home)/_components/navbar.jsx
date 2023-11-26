import React from "react";
import MobileSideBar from "./mobilesidebar";

const NavBar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-lime-50 shadow-sm border-neutral-150">
      <MobileSideBar />
    </div>
  );
};

export default NavBar;
