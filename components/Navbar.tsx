import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between gap-4 border-b border-nav-border px-8 py-5">
      <div className=" flexStart flex-1 gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={115}
            height={43}
            alt="main"
            className=" object-contain"
          />
        </Link>

        <ul className=" text-small hidden gap-7 xl:flex">
         
         {NavLinks.map(item=>(
            <Link href={item.href} key={item.key}>
             {item.text}
                 
            </Link>
         ))}
         

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
