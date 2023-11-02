import React from "react";

export default function TopNavbar() {
  return (
    <div id="topbar" className="w-full mb-2 sticky top-0 pt-2 z-50">
      <div className="navbar flex py-4 items-center justify-between bg-white shadow-lg rounded-md px-8 sticky top-0">
        <div className="flex-1">
          <a className="cursor-pointer normal-case text-xl text-[#5d596c]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-6">

          {/* Theme */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
            </label>
          </div>

          {/* Notification */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
            </label>
          </div>

          {/* Profile */}
         <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full bg-[#ddd] h-12">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="block gap-2">
                <div>
                <div className="w-10 rounded-full h-10 bg-[#ddd]">
                  <div></div>
                </div>
                <div>
                  <h4 className="text-lg">User</h4>
                  <h6 className="text-sm">Admin</h6>
                </div>
                </div>
              </li>
              <hr />
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div> 
        </div>
      </div>
    </div>
  );
}