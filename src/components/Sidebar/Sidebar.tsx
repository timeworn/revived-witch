"use client";

import { JSX, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import SidebarDropdown from "./SidebarDropdown";
import { usePathname } from "next/navigation";
import { SiteRoute } from "../../data/siteData";
import { useUI } from "../../app/_components/Providers";

interface SidebarProps {
  siteRoute: SiteRoute;
}

const isRouteActive = (route: SiteRoute, currentPath: string): boolean => {
  if (!route.routes) {
    return route.url === currentPath;
  }
  return Object.values(route.routes).some((subRoute) =>
    isRouteActive(subRoute, currentPath),
  );
};

const createRoute = (
  route: SiteRoute,
  currentPath: string,
  index: number,
): JSX.Element => {
  if (!route.routes) {
    return (
      <SidebarItem
        key={index}
        name={route.name}
        href={route.url}
        icon={<i className="bi bi-link-45deg"></i>}
      />
    );
  } else {
    const active = isRouteActive(route, currentPath);
    return (
      <SidebarDropdown
        key={index}
        name={route.name}
        icon={<i className="bi bi-folder-fill"></i>}
        active={active}
      >
        {Object.values(route.routes).map((subRoute, index) =>
          createRoute(subRoute, currentPath, index),
        )}
      </SidebarDropdown>
    );
  }
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const currentPath = usePathname();
  const { isSidebarVisible, setSidebarAvailable } = useUI();
  const routes = Object.values(props.siteRoute.routes ?? {});

  useEffect(() => {
    setSidebarAvailable(true);
    return () => {
      setSidebarAvailable(false);
    };
  }, [setSidebarAvailable]);

  return (
    <nav
      className="sidebar fixed bottom-0 z-40 h-full w-full overflow-y-auto bg-white p-2 text-center dark:border-slate-50/[0.06] dark:bg-slate-900 md:w-[250px] lg:left-0 lg:border-r lg:border-slate-900/10"
      hidden={!isSidebarVisible}
    >
      <div className="main relative top-[64px] pb-8">
        <ul className="grid gap-1">
          <SidebarItem name="Home" href={props.siteRoute.url} />
          {routes.map((route, index) => createRoute(route, currentPath, index))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
