"use client";

import React, { memo, useEffect, useState } from "react";
import siteData from "../../data/siteData";
import "./Navbar.css";
import { getImageUrl } from "../../hooks/getImage";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import NavbarDropdownItem from "./NavbarDropdownItem";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const renderNavbarItems = (
  urls: any,
  isDropdown: boolean = false,
  uniqueKey: number = 0,
) => {
  return Object.keys(urls).map((key, _) => {
    const item = urls[key];
    const name = item.name;
    const url = item.url;

    if (key === "home" || item.hidden) {
      return null;
    }

    uniqueKey++;

    if (typeof url === "string") {
      return isDropdown ? (
        <NavbarDropdownItem key={uniqueKey} name={name} url={url} />
      ) : (
        <NavbarItem key={uniqueKey} name={name} url={url} />
      );
    } else if (typeof url === "object") {
      return isDropdown ? (
        <li key={uniqueKey}>
          <NavbarDropdown name={name}>
            {renderNavbarItems(url, true, uniqueKey)}
          </NavbarDropdown>
        </li>
      ) : (
        <NavbarDropdown key={uniqueKey} name={name}>
          {renderNavbarItems(url, true, uniqueKey)}
        </NavbarDropdown>
      );
    }

    return null;
  });
};

const renderMobileNavbarItems = (data: any) => {
  return Object.keys(data).map((key) => {
    const item = data[key];
    if (item.hidden) {
      return null;
    }

    if (typeof item.url === "string") {
      return (
        <li key={key}>
          <Link href={item.url}>{item.name}</Link>
        </li>
      );
    }

    return (
      <li key={key}>
        <p>{item.name}</p>
        <ul className="before:bg-black dark:before:bg-white">
          {renderMobileNavbarItems(item.url)}
        </ul>
      </li>
    );
  });
};

const Navbar: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="flex-1 md:gap-1">
        <Link
          href={siteData.siteUrls.rw.home.url}
          className="text-default btn btn-ghost text-xl"
        >
          <img
            className="m-auto h-8 md:h-11"
            src={getImageUrl("rw/logo.webp")}
          />
        </Link>
      </div>
      <div className="gap-1">
        <div className="hidden md:flex">
          {renderNavbarItems(siteData.siteUrls.rw)}
        </div>
        <div className="dropdown dropdown-left dropdown-bottom md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
          </div>
          <ul
            tabIndex={0}
            className="bg-color menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {renderMobileNavbarItems(siteData.siteUrls.rw)}
          </ul>
        </div>
        <ThemeSwitch />
      </div>
    </nav>
  );
});

export default Navbar;
