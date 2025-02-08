'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    console.log('open', open);

  return (
    <div className="w-full h-16 px-6 py-3 shadow-md shadow-[#F5ECD5] bg-white flex justify-between items-center">
      <Image src={"/logo.png"} width={70} height={200} alt="logo" />

      <div className="relative">
      {/* Menu Icon (Shows when closed) */}
      <Menu
        onClick={() => setOpen(true)}
        className={`lg:hidden cursor-pointer ${open ? "hidden" : "block"}`}
      />

      {/* Close Icon (Shows when open) */}
      <X
        onClick={() => setOpen(false)}
        className={`lg:hidden cursor-pointer ${open ? "block" : "hidden"}`}
      />
 
      {/* Mobile Menu */}
      <div
        className={`absolute right-0 block lg:hidden top-8 w-[200px] h-64 px-8 py-4 bg-gray-50 z-50 rounded-lg shadow-lg transition-transform duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-black hover:text-[#3d3d3d] text-sm font-normal">
            Home
          </Link>
          <Link href="/" className="text-black hover:text-[#3d3d3d]  text-sm font-normal">
            About
          </Link>
          <Link href="/" className="text-black hover:text-[#3d3d3d]  text-sm font-normal">
            Products
          </Link>
          <Link href="/" className="text-black hover:text-[#3d3d3d]  text-sm font-normal">
            Contact us
          </Link>

          <div className="h-8 bg-[#578e7e] rounded-3xl mt-10 flex justify-center items-center border border-[#578e7e]">
            <Link href="/" className="text-white text-sm font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>


{/** web menu */}
      <div className="justify-start items-center gap-[37px] hidden lg:inline-flex">
        <div className="justify-start items-center gap-[21px] flex">
          <Link
            href="/"
            className="text-black hover:text-[#3d3d3d] text-sm font-normal font-['Roboto']"
          >
            <span>Home</span>
          </Link>
          <Link
            href="/"
            className="text-black hover:text-[#3d3d3d] text-sm font-normal font-['Roboto']"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-black hover:text-[#3d3d3d] text-sm font-normal font-['Roboto']"
          >
            Products
          </Link>
          <Link
            href="/"
            className="text-black hover:text-[#3d3d3d] text-sm font-normal font-['Roboto']"
          >
            Contact us
          </Link>
        </div>
        <div className="h-8 pl-[34px] pr-[33px] py-2 bg-[#578e7e] rounded-3xl border border-[#578e7e] justify-center items-center flex overflow-hidden">
          <Link
            href="/"
            className="text-white text-sm font-medium font-['Roboto']"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
