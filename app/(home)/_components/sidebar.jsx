"use client";

import Image from "next/image";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import SideBarItem from "./sidebar-item";
import { MdOutlineLogout } from "react-icons/md";

const sidebarItems = [
  { id: 1, label: "Home", icon: MdOutlineDashboard, link: "/home" },
  { id: 2, label: "Plants", icon: PiPlant, link: "/plants" },
  { id: 3, label: "Explore", icon: FaSearch, link: "/explore" },
  { id: 4, label: "Community", icon: IoPeopleOutline, link: "/community" },
];

const SideBar = () => {
  return (
    <aside className="h-full border-r flex flex-col overflow-y-auto bg-inherit shadow-sm">
      <div className="p-6">
        <Image
          src="/images/logo.png"
          alt="plantr logo"
          width={100}
          height={100}
          className="text-black justify-self-center"
        />
        <div className="flex flex-col w-full mt-6">
          {sidebarItems.map(({ icon: Icon, ...item }) => {
            return (
              <SideBarItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                label={item.label}
                href={item.link}
              />
            );
          })}
        </div>
        <div className="flex flex-row absolute bottom-0 mb-4 ml-4 items-center justify-center">
          <a className="flex items-center cursor-pointer text-red-500" href="/">
            Sign Out <MdOutlineLogout className="pl-2" size={25} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
