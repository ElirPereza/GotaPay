"use client";
import { DollarSign, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { dataHeader } from "./header.data";
import { Reveal } from "@/components/shared/Reveal/Reveal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import HeaderMobile from "./header.mobile";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <div className="bg-[#1c2233]">
      <Reveal position="bottom" className="bg-[#1c2233] ">
        <nav className="flex flex-wrap items-center justify-between  max-w-5xl p-4 mx-auto md:py-8">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" width="150" height="40" alt="Logo Bank" />
          </Link>
          <div
            className={`${
              openMobileMenu ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <div className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {dataHeader.map(({ id, name, idLink }) => (
                <div
                  key={id}
                  className="px-4 transition-all duration-500 ease-in-out"
                >
                  <Link href={idLink} className="text-lg hover:text-secondary">
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <HeaderMobile />
        </nav>
      </Reveal>
    </div>
  );
};

export default Header;
