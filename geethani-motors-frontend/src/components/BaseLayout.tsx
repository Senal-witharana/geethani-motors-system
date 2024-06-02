import React from "react";
import Sidebar from "./Sidebar/sidebar";
import "../../styles/BaseLayout/baseLayout.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar/navbar";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function BaseLayout({ children }: Props) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="layout">
        <Sidebar />

        {children}
      </div>
    </div>
  );
}
