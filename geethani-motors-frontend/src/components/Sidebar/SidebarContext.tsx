"use client";

import { createContext, useState } from "react";

import { SidebarContext } from "./SidebarContext"; // Import SidebarContext

const initialValue = { isCollapsed: false };

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
