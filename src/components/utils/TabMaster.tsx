"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface TabMasterProps {
  pages: {
    name: string;
    child: React.ReactNode;
  }[];
}

const TabMaster: React.FC<TabMasterProps> = ({ pages }) => {
  const searchParams = useSearchParams();
  const selectedTabIndex = parseInt(searchParams.get("tab") ?? "0", 10);
  const [selectedTab, setSelectedTab] = useState(
    pages[Math.max(0, Math.min(selectedTabIndex, pages.length - 1))],
  );

  const handleTab = (tab: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("tab", tab.toString());
    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
    setSelectedTab(pages[tab]);
  };

  return (
    <div className="page-primary">
      <header className="page-header">
        <h1>{selectedTab.name}</h1>
      </header>
      <div className="mb-4 flex h-fit flex-wrap justify-center gap-3">
        {pages.map((page, index) => (
          <button
            key={index}
            className={`btn-main ${selectedTabIndex === index ? "btn-active" : ""}`}
            onClick={() => handleTab(index)}
          >
            {page.name}
          </button>
        ))}
      </div>
      {pages.map((page, index) => (
        <div key={index} hidden={selectedTab !== page}>
          {page.child}
        </div>
      ))}
    </div>
  );
};

export default TabMaster;
