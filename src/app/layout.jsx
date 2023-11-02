import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import TopNavbar from "@/components/topNavbar";
import FilterSidebar from '@/components/filterSidebar';
import Footer from '@/components/footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dasboard - TaskTrack',
  description: 'TaskTrack is a task management application',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <aside className="w-64 h-full shadow-md">
            <Sidebar />
          </aside>

          <div className="bg-[#F8F7FA] w-[80%] h-full">
            <div className="px-6 relative">
              {/* Top Navbar  */}
              <TopNavbar />
              <div className="min-h-[85vh] flex gap-6 justify-between">
                <div className="mt-4 p-4 pb-6 md:w-[65%] border">
                  {children}
                </div>
                {/*---------RIGHT SIDE FILTER BAR---------- */}
                <aside className="fixed right-[27px] w-[24%] bg-transparent mt-4 pb-8 mb-8">
                  <FilterSidebar />
                </aside>
              </div>

              {/* Footer */}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
