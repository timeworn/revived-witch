"use client";

import React, { memo, useEffect, useState } from "react";
import siteData from "../../data/siteData";
import "./Navbar.css";
import { getImageUrl } from "../../hooks/getImage";
import NavbarItem from "./NavbarItem";
import NavbarDropdown from "./NavbarDropdown";
import NavbarDropdownItem from "./NavbarDropdownItem";
import Link from "next/link";

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
  const [theme, setTheme] = useState<string>("");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const currentTheme = document.body.className;
    setTheme(currentTheme);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== currentTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  useEffect(() => {
    if (theme === "") return;
    document.body.className = theme;
  }, [theme]);

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
          href={siteData.siteUrls.home.url}
          className="text-default btn btn-ghost text-xl"
        >
          <img
            className="m-auto h-8 md:h-11"
            src={getImageUrl("rw/logo.png")}
          />
        </Link>
      </div>
      <div className="gap-1">
        <div className="hidden md:flex">
          {renderNavbarItems(siteData.siteUrls)}
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
            {renderMobileNavbarItems(siteData.siteUrls)}
          </ul>
        </div>
        <div className="ml-3 flex flex-none items-center border-l border-slate-300 pl-3 dark:border-slate-700">
          <label className="svg-fill btn btn-circle btn-ghost swap swap-rotate">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            <svg
              className="swap-off h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
