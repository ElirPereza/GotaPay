"use client";
import { cn } from "@/lib/utils";

//COMPONENTS
import { siteSidebar } from "../site";
import NavItem from "./navitems";
import LogoSidebar from "./logotoogle";
import UserProfile from "./userprofile";
import useApp from "@/hooks/store/useApp";

export default function Sidebar() {
  const { currentRoute, isSidebarOpen, setCurrentRoute } = useApp();

  return (
    <div className="">
      {/* NAV DESKTOP */}
      <aside
        className={cn(
          "h-screen inset-y-0 left-0 z-50  transform transition-all duration-300 ease-in-out border-r border-accent/40",
          isSidebarOpen ? "w-80" : "w-24"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <LogoSidebar />
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-10">
            <ul className="space-y-1 px-2">
              {siteSidebar.pages.map((item, index) => (
                <NavItem
                  href={item.href}
                  key={index}
                  icon={item.icon}
                  title={item.label}
                  isActive={currentRoute === item.label}
                  onClick={() => setCurrentRoute(item.label)}
                />
              ))}
            </ul>
          </nav>

          {/* User profile */}
          <UserProfile isSidebarOpen={isSidebarOpen} />
          {/* Theme toggle */}
          {/* <ToggleTheme /> */}
        </div>
      </aside>
    </div>
  );
}
