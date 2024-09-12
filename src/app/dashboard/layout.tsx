import Sidebar from "@/components/dashboard/sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className=" w-full">
       {children}
      </div>
    </div>
  );
}
