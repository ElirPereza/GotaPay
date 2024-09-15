import { HeaderDashboard } from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
       {/* Sidebar */}
       <Sidebar/>
      <div className=" flex flex-col w-full">
      <HeaderDashboard/>
       {children}
      </div>
    </div>
  );
}
