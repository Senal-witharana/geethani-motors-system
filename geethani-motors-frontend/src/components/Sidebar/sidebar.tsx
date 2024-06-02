//sidebar

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdSettings,
  MdPerson,
  MdInfo,
  MdContactMail,
  MdHelp,
  MdAssignment,
  MdSecurity,
  MdLiveHelp,
} from "react-icons/md";
import "../../../styles/sidebar/sidebar.css";

const sidebarItems = [
  {
    name: "home",
    href: "/pages/dashboard",
    icon: AiOutlineHome,
  },
  {
    name: "settings",
    href: "/pages/dashboard/settings",
    icon: MdSettings,
  },

  {
    name: "employee",
    href: "/pages/dashboard/employee",
    icon: MdPerson,
  },
  {
    name: "about",
    href: "/pages/dashboard/about",
    icon: MdInfo,
  },
  {
    name: "contact",
    href: "/contact",
    icon: MdContactMail,
  },
  {
    name: "help",
    href: "/help",
    icon: MdHelp,
  },
];

export default function Sidebar() {
  const [isCollapsed, toggleSidebarCollapse] = useState<boolean>(false);

  const toggleSidebarCollapseHandler = () => {
    toggleSidebarCollapse((prev) => !prev);
  };

  return (
    <div className="sidebar_wrapper">
      <button className="btn" onClick={toggleSidebarCollapseHandler}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar_top">
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            width={80}
            height={80}
            className="sidebar-logo"
          />
          <p className="sidebar_logo-name"> Geethani Motors</p>
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar_link">
              <Link href={href} className="sidebar_link">
                <span className="sidebar_icon">
                  <Icon />
                </span>
                <span className="sidebar_name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
