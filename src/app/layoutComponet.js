'use client'

import Sidebar from "@/components/sidebar";
import TopNavbar from "@/components/topNavbar";
import FilterSidebar from "@/components/filterSidebar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import { createContext, useState } from "react";
import { SearchContext } from "./context/SearchContext";


export default function LayoutComponent({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [reload, setReload] = useState(false);


  return (
    <div className="flex ">
      <aside className="w-64 h-full shadow-md">
        <Sidebar />
      </aside>

      <div className="bg-[#F8F7FA] w-[80%] h-full">
        <div className="px-6 relative">
          {/* Top Navbar  */}
          <TopNavbar setSearchValue={setSearchValue} setReload={setReload} />
          <div className="min-h-[85vh] md:flex gap-6 justify-between">
            <div className="mt-4 p-4 pb-6 md:w-[65%] border">
              <ToastContainer position="top-center" />
              <SearchContext.Provider
                value={{ searchValue, reload, setReload }}
              >
                {children}
              </SearchContext.Provider>
            </div>
            {/*---------RIGHT SIDE FILTER BAR---------- */}
            <aside className="fixed hidden md:block right-[27px] w-[24%] bg-transparent mt-4 pb-8 mb-8">
              <FilterSidebar />
            </aside>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
