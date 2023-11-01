import Sidebar from "@/components/sidebar";
// import DashboardTopbar from "@/components/dashboardTopbar";
// import Footer from "@/components/footer";
import TopNavbar from "@/components/topNavbar";

export default function DashboardLayout({ children }: any) {
  return (
    
    <div className="flex">
      <aside className="w-64 h-full shadow">
        <Sidebar />
      </aside>

      <div className="bg-[#F8F7FA] w-[80%] h-full">
        <div className="px-6 relative">
          {/* Top Navbar  */}
          <TopNavbar />
          <div className="pt-4">
          {children}
          </div>
          {/* Footer */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}