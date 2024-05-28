import React from "react";
import Sidebar from "./Sidebar/sidebar";
import "../../styles/BaseLayout/baseLayout.css";
import { ReactNode } from "react";
import ResponsiveAppBar from "./Navbar/navbar";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function BaseLayout({ children }: Props) {
  return (
    <div className="layout">
      <Sidebar />

      {/* <div className="">
        <ResponsiveAppBar />
      </div> */}
      {children}
    </div>
  );
}
