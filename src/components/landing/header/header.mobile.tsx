import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import React from "react";
import { dataHeader } from "./header.data";
import Link from "next/link";

const HeaderMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="block text-3xl md:hidden cursor-pointer items-center"
          variant="outline"
        >
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {dataHeader.map((x) => (
          <DropdownMenuItem key={x.id}>
            <Link href={x.idLink}>{x.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMobile;
