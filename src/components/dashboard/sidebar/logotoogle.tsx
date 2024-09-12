import { Button } from "@/components/ui/button";
import useApp from "@/hooks/store/useApp";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";

const LogoToggle = () => {
  const { toggleSidebar, isSidebarOpen } = useApp();
  return (
    <div className=" relative flex h-20 items-center border-b border-accent/40 px-4">
      <a
        href="#"
        className="flex items-center gap-8 font-semibold"
      >
        <div className="w-16 h-12  bg-accent rounded-full" />
        <span className={cn("text-2xl origin-left duration-300", isSidebarOpen? "" : "scale-0")}>GotaPay</span>
      </a>
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className=" border bg-accent border-accent/40  w-6 h-8 rounded-full absolute cursor-pointer -right-[18px] top-96 "
      >
        <X
          className={cn(
            "h-5 w-5 items-center absolute ",
            isSidebarOpen ? "" : " rotate-45"
          )}
        />
      </Button>
    </div>
  );
};

export default LogoToggle;
