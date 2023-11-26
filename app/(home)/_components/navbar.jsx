import React from "react";
import MobileSideBar from "./mobilesidebar";

const NavBar = () => {
  return (
    <div className="p-4 border-bottom h-full flex items-center bg-lime-50 shadow-sm">
      <MobileSideBar />
    </div>
  );
};

export default NavBar;
