"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  // const [toggleMenu, setToggleMenu] = React.useState(false)
  const pathname = usePathname();
  const getPath = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div id="sidebar" className="fixed shadow-lg top-0 bottom-0 w-64 z-50 ">
      <div className="flex relative px-3 sticky top-0 bg-white z-50">
        <h3 className="text-[#5d596c] text-2xl font-semibold p-4">
          task<span className="text-[#00A76F]">track</span>
        </h3>
      </div>

      {/* Navbar */}
      <nav
        className="fixed flex ml-4 top-[62px] bottom-0 w-64 overflow-y-auto "
      >
        <ul className="menu menu-md w-full mt-4">
          {/* Basic dashboard items */}
          <li className="text-[#6f6b7d]">
              <ul className="ml-2">
                <li>
                  <Link
                    href="/dashboard"
                    className={`text-[18px] ${
                      getPath == "dashboard" ? "sidebar__active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className={`w-2 h-2 ${
                        getPath == "dashboard" ? "text-white" : ""
                      }`}
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className={`text-[18px] mb-2 ${
                      getPath == "dashboard" ? "sidebar__active" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className={`w-2 h-2 ${
                        getPath == "dashboard" ? "text-white" : ""
                      }`}
                    >
                      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                    </svg>
                    TASKS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/crm"
                    className={`text-[18px] ${
                      getPath == "crm" ? "sidebar__active" : ""
                    }`}
                  >
                    CRM
                  </Link>
                </li>
              </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}