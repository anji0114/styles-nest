import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiBell } from "react-icons/bi";

export const HeaderDashboard = () => {
  return (
    <header className="border-y border-[#444]">
      <div className="px-8 flex">
        <div className="h-[60px] flex items-center w-[240px] border-r border-[#444]">
          <Link href="/dashboard">
            <Image src="/logo.svg" width={72} height={22} alt="webrel" />
          </Link>
        </div>
        <div className="w-[calc(100%_-_240px)] h-[60px]  flex items-center justify-end gap-5">
          <Link
            href="/notice"
            className="relative flex items-center justify-center w-8 h-8 rounded-full border border-[#444] bg-[#2E2E2E]"
          >
            <span className="absolute top-0 right-[2px] w-[5px] h-[5px] rounded-full bg-[#E30E0E]"></span>
            <BiBell className="w-4" />
          </Link>
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </header>
  );
};
