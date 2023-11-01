"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  // const [toggleMenu, setToggleMenu] = React.useState(false)
  const pathname = usePathname();
  const getPath = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <div id="sidebar" className="fixed shadow-lg top-0 bottom-0 w-[20%] z-50 ">
      <div className="flex relative px-3 sticky top-0 bg-white z-50">
        <h3 className="text-[#5d596c] flex itemsc-center text-[22px] font-semibold p-4 mt-2 mb-4">
          {/* LOGO */}
            <span className="LOGO"></span>
            {/* <span className="LOGO2"></span> */}
            <span className="-ml-[27px] text-[#2565e6] mr-3 text-[22px] font-semibold">tt</span>
          task<span className="">track</span>
        </h3>
          </div>
          <hr />

      {/* Navbar */}
      <nav
        className="fixed mt-10 flex flex-col justify-between mb-8 ml-4 top-[62px] bottom-0 w-[17%] overflow-y-auto "
          >
              
              {/* MENUS */}
              
              <ul className="menu menu-md w-full mt-4">
              <h5 className='text-[11px] mb-0 font-semibold text-[#90A5BA] ml-[15px]'>MENU</h5>
          {/* Basic Sidebar items */}
                <li className={`mt-4 px-3 py-2 rounded-md ${
                      getPath == "dashboard" ? "sidebar__active" : ""
                    }`}>
                  <Link
                    href="/dashboard"
                    className={`text-[16px] flex gap-2 items-center`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${getPath == 'dashboard' ? '#2565e6' : ''}`} viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-[20px] h-[20px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

                    Dashboard
                  </Link>
                </li>
                <li className={`mt-1 px-3 py-2  rounded-md ${
                      getPath == "my-task" ? "sidebar__active" : ""
                    }`}>
                  <Link
                    href="/my-task"
                    className={`text-[15px] flex gap-2 items-center`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[21px] h-[21px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>

                    My Task
                  </Link>
                </li>
                <li className={`mt-1 px-3 py-2  rounded-md ${
                      getPath == "my-team" ? "sidebar__active" : ""
                    }`}>
                  <Link
                    href="/my-team"
                    className={`text-[15px] flex gap-2 items-center`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>


                    My Team
                  </Link>
                </li>
        </ul>


        {/*---------------NAVBAR BOTTOM--------- */}
        <ul className="ml-3">
          <hr />
        <li className={`mt-4 px-3 py-2  rounded ${
                      getPath == "settings" ? "sidebar__active" : ""
                    }`}>
                  <Link
                    href="/settings"
                    className={`text-[15px] flex gap-2 items-center`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[20px] h-[20px]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


                    Settings
                  </Link>
                </li>
        </ul>
      </nav>
      <div>
      </div>
    </div>
  );
}