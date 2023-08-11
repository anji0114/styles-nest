import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeaderLp = () => {
  return (
    <header>
      <div className="px-8 flex">
        <div className="h-[60px] flex items-center w-[240px] border-r border-[#444]">
          <Link href="/dashboard">
            <Image src="/logo.svg" width={72} height={22} alt="webrel" />
          </Link>
        </div>
      </div>
    </header>
  );
};
