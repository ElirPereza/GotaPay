import { Button } from "@/components/ui/button";
import { AppState } from "@/hooks/store/useApp";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import React from "react";

type SidebarOpen = Pick<AppState, "isSidebarOpen">;

const UserProfile = ({ isSidebarOpen }: SidebarOpen) => {
  return (
    <div className="border-t border-accent p-4">
      <div className="flex items-center gap-3 ">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: "3rem",
                height: "3rem",
              },
            },
          }}
        />
        <div>
          <h4
            className={cn(
              "font-semibold origin-left transition-all",
              isSidebarOpen ? "opacity-100 " : "opacity-0 scale-0",
            )}
          >
            Jesus Maldonado
          </h4>
          <p
            className={cn(
              "text-sm text-gray-400 origin-left transition-all",
              isSidebarOpen ? "opacity-100 " : "opacity-0 scale-0",
            )}
          >
            Jmaldona18@gmail.com
          </p>
        </div>
        {isSidebarOpen && (
          <Button variant={"ghost"} className="ml-auto rounded-full p-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
