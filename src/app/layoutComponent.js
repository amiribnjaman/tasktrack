"use client";

import Sidebar from "@/components/sidebar";
import TopNavbar from "@/components/topNavbar";
import FilterSidebar from "@/components/filterSidebar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";

// Redux Store and provider
import store from "@/redux/store";
import { Provider } from 'react-redux'

export default function LayoutComponent({ children }) {

  return (
    <div className="md:flex ">
      <Provider
        // value={{ reload, setReload, tasks, setTasks, oldData, setOldData }}
        store={store}
      >
        <aside className="md:block hidden w-64 h-full shadow-md">
          <Sidebar />
        </aside>

        <div className="bg-[#F8F7FA] md:w-[80%] h-full">
          <div className="px-6 relative">
            {/* Top Navbar  */}
            <TopNavbar
            />

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

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Provider>
    </div>
  );
}
