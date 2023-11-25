import React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./sidebar";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger v>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-inherit">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
