import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function Carousel() {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-4/5 relative mx-auto px-4 h-14 bg-white rounded-3xl border border-[#578e7e] justify-start items-center inline-flex overflow-hidden">
        <div className="self-stretch justify-start items-center gap-[7px] inline-flex">
          <div className="flex px-4 flex-row gap-1 items-center absolute top-0 right-0 w-full h-full">
            <Search size={20} color="#578e7e" />

            <input
              type="text"
              className="w-full   h-full text-xl outline-none border-none placeholder:text-[#578e7e] placeholder:font-medium"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      {/**carousel */}

      <div className="w-full h-80 mt-12 relative">
        <div className="w-full h-full relative">
          <Image
            src="/carousel-image.png"
            alt="carousel image"
            layout="fill" // Makes image fill the parent div
            objectFit="cover" // Ensures the image covers the area without distortion
          />

          <div className="flex flex-row items-center gap-2 absolute bottom-3 left-1/2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
