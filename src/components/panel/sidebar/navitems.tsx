import { Button } from "@/components/ui/button";
import useApp from "@/hooks/store/useApp";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  icon: LucideIcon;
  title: string;
  isActive: boolean;
  onClick: () => void;
  href: string;
}

const NavItem = ({ icon: Icon, title, isActive, onClick, href }: NavItemProps) => {
  const { isSidebarOpen } = useApp();

  return (
    <li>
      <Link href={href}>
        <Button
          variant="ghost"
          onClick={onClick}
          className={cn(
            "flex font-semibold text-base w-full items-center justify-start gap-3 rounded-lg px-7 py-6 transition-all",
            isActive
              ? "text-accent border border-accent"
              : "text-gray-700"
          )}
        >
          <Icon className="h-5 w-5 flex-shrink-0" />
          <span
            className={cn(
              "origin-left transition-all",
              isSidebarOpen ? "opacity-100 " : "opacity-0 scale-0"
            )}
          >
            {title}
          </span>
        </Button>
      </Link>
    </li>
  );
};

export default NavItem;
