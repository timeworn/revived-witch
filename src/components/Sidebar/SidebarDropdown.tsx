"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [height, setHeight] = useState("0px");
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        setHeight(`${dropdownRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen, props.children]);

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
        className={`${isOpen ? "opacity-100" : "overflow-hidden opacity-0"} sidebar-dropdown mx-auto w-4/5 duration-300`}
        ref={dropdownRef}
        style={{ height: height }}
      >
        {props.children}
      </ul>
    </li>
  );
};

export default SidebarDropdown;
