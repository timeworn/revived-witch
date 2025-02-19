"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

interface PageMasterProps<T> {
  objects: T[];
  objectLimit?: number;
  renderObject: (object: T) => React.ReactNode;
  className?: string;
  resetPageOnParam?: string;
}

const PageMaster = <T,>({
  objects,
  objectLimit = 20,
  renderObject,
  className,
  resetPageOnParam,
}: PageMasterProps<T>) => {
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);
  const currentPage = parseInt(queryParams.get("page") || "1", 10);
  const currentTab = queryParams.get(resetPageOnParam || "");
  const [prevTab, setPrevTab] = useState(currentTab);

  const totalPages = useMemo(
    () => Math.ceil(objects.length / objectLimit),
    [objects.length],
  );

  const paginatedObjects = useMemo(() => {
    const startIndex = (currentPage - 1) * objectLimit;
    const endIndex = startIndex + objectLimit;
    return objects.slice(startIndex, endIndex);
  }, [currentPage, objects, objectLimit]);

  const handlePreviousPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    queryParams.set("page", newPage.toString());
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handleNextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    queryParams.set("page", newPage.toString());
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  useEffect(() => {
    if (resetPageOnParam && currentTab !== prevTab) {
      setPrevTab(currentTab);
      queryParams.set("page", "1");
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [resetPageOnParam, currentTab]);

  const wrapperProps = className
    ? { className: className }
    : {
        className:
          "grid gap-6 prose-p:mb-0 prose-p:mt-0 sm:grid-cols-3 lg:grid-cols-4",
      };

  return (
    <>
      <div {...wrapperProps}>
        {paginatedObjects.map((object, index) => (
          <div key={index}>{renderObject(object)}</div>
        ))}
      </div>
      <div className="ml-10 mr-10 mt-6 lg:ml-28 lg:mr-28">
        <nav className="flex items-center justify-between">
          <button
            className="btn-round-gray btn-anim btn-size-md text-default"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <p>
            {currentPage} of {totalPages}
          </p>
          <button
            className="btn-round-gray btn-anim btn-size-md text-default"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    </>
  );
};

export default PageMaster;
