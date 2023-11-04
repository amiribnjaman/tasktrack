import { Inter } from "next/font/google";
import "./globals.css";
import LayoutComponent from "./layoutComponet";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Dasboard - TaskTrack",
  description: "TaskTrack is a task management application",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <title>Dasboard - TaskTrack</title>
      </Head> */}
      <body>
        <LayoutComponent children={children}/>
      </body>
    </html>
  );
}
