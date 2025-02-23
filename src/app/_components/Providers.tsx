"use client";

import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { ThemeProvider } from "next-themes";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UIContextProps {
  isSidebarVisible: boolean;
  toggleSidebar: (value?: boolean) => void;
  isSidebarAvailable: boolean;
  setSidebarAvailable: (value: boolean) => void;
}

const UIContext = createContext<UIContextProps>({
  isSidebarVisible: true,
  toggleSidebar: () => {},
  isSidebarAvailable: false,
  setSidebarAvailable: () => {},
});

const Providers: React.FC<{ children: ReactNode }> = (props) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isSidebarAvailable, setSidebarAvailable] = useState(false);

  const toggleSidebar = (value?: boolean) => {
    if (value) {
      setSidebarVisible(value);
    }

    setSidebarVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ProgressProvider
      height="4px"
      color="#f87171"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <ThemeProvider attribute="class">
        <UIContext.Provider
          value={{
            isSidebarVisible,
            toggleSidebar,
            isSidebarAvailable,
            setSidebarAvailable,
          }}
        >
          {props.children}
        </UIContext.Provider>
      </ThemeProvider>
    </ProgressProvider>
  );
};

export default Providers;

export const useUI = () => useContext(UIContext);
