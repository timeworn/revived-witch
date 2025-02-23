"use client";

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useUI } from "../../app/_components/Providers";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleSidebar, isSidebarAvailable } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 z-50 w-full backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] lg:border-b lg:border-slate-900/10 ${isScrolled ? "bg-white dark:bg-slate-900/75" : "bg-white/95 dark:bg-transparent"}`}
    >
      <div id="navbar-items-left" className="flex-1 md:gap-1">
        <Link href="/" className="text-default btn btn-ghost text-xl">
          Timeworn Wiki
        </Link>
      </div>
      <div id="navbar-items-right" className="gap-1">
        {isSidebarAvailable && (
          <button
            className="btn btn-ghost md:hidden"
            onClick={() => toggleSidebar()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        )}
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
