"use client";

import Sidebar from "@/components/sidebar";
import TopNavbar from "@/components/topNavbar";
import FilterSidebar from "@/components/filterSidebar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { SearchContext } from "@/app/context/SearchContext";

export default function LayoutComponent({ children }) {
  // Those are declare here to props drillings (awful)
  const [searchValue, setSearchValue] = useState("");
  const [reload, setReload] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [oldData, setOldData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/task", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("Token"),
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setOldData(data);
      });
  }, [reload]);

  return (
    <div className="md:flex ">
      <aside className="md:block hidden w-64 h-full shadow-md">
        <Sidebar />
      </aside>

      <div className="bg-[#F8F7FA] md:w-[80%] h-full">
        <div className="px-6 relative">
          {/* Top Navbar  */}
          <TopNavbar
            setReload={setReload}
            tasks={tasks}
            setTasks={setTasks}
            oldData={oldData}
          />
          <SearchContext.Provider
            value={{ reload, setReload, tasks,setTasks, oldData,setOldData }}
          >
            <div className="min-h-[85vh] md:flex gap-6 justify-between">
              <div className="mt-4 p-4 pb-6 md:w-[65%] border">
                <ToastContainer position="top-center" />

                {children}
              </div>
              {/*---------RIGHT SIDE FILTER BAR---------- */}
              <aside className="fixed hidden md:block right-[27px] w-[24%] bg-transparent mt-4 pb-8 mb-8">
                <FilterSidebar />
              </aside>
            </div>
          </SearchContext.Provider>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
