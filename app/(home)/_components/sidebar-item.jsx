"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

//TODO fix icons
const SideBarItem = ({ icon, label, href, id }) => {
  const pathname = usePathname();
  const router = useRouter();
  //TODO handle active sidebar
  const isActive = (pathname === "/" && href === "/") || pathname === href;

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-lime-100/60"
    >
      <div className="flex items-center gap-x-2 py-4">
        <icon size={22} className="text-slate-500" />
        {id == 1 && <MdOutlineDashboard size={22}/>}
        {id == 2 && <PiPlant size={22}/>}
        {id == 3 && <FaSearch size={22}/>}
        {id == 4 && <IoPeopleOutline size={22}/>}
        {label}
      </div>
    </button>
  );
};

export default SideBarItem;
