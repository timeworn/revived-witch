"use client";

import React, { memo, useEffect, useState } from "react";

interface SearchBarProps {
  objects: ReadonlyArray<any>;
  filteredObjects: (filtered: any[]) => void;
  filter?: (object: any, searchQuery: string) => boolean;
  dependencies?: any[];
}

const SearchBar: React.FC<SearchBarProps> = memo(
  ({ objects, filteredObjects, filter, dependencies = [] }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      const results = objects.filter((object) => {
        if (filter) {
          return filter(object, searchQuery);
        }
        const name =
          typeof object.name === "string" ? object.name : object.getName();
        return name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      filteredObjects(results);
    }, [searchQuery, objects, ...dependencies]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };

    return (
      <div className="pointer-events-auto relative w-full bg-white dark:bg-slate-900">
        <label className="box-shadow flex h-full w-full rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 sm:items-center">
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="my-auto mr-3 flex-none"
          >
            <path
              d="m19 19-3.5-3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="bg-transparent outline-none"
          />
        </label>
      </div>
    );
  },
);

export default SearchBar;
