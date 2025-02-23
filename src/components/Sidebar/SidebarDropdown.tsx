"use client";

import React, { useState } from "react";
import "./Sidebar.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface SidebarDropdownProps {
  name: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
}

const SidebarDropdown: React.FC<SidebarDropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <li className={props.active ? "active" : ""}>
      <div
        className="text-default sidebar-item-dropdown cursor-pointer"
        onClick={toggleDropdown}
      >
        {props.icon}
        <div className="flex w-full items-center justify-between">
          {props.name}
          <ChevronRightIcon
            className={`${isOpen ? "rotate-90" : "rotate-0"}`}
            width={18}
            height={18}
          />
        </div>
      </div>
      <ul
        className={`${isOpen ? "h-auto opacity-100 duration-500" : "h-0 overflow-hidden opacity-0 duration-300"} sidebar-dropdown mx-auto w-4/5`}
      >
        {props.children}
      </ul>
    </li>
  );
};

export default SidebarDropdown;
