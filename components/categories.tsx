import React from 'react'
import Image from 'next/image';

const categoriesData = [
    {
         id: 1,
         image: '/categories1.png',
         genre: 'Romance',
    },
    {
         id: 2,
         image: '/categories2.png',
         genre: 'Fantasy',
    },
    {
        id: 3,
        image: '/categories3.png',
        genre: 'Mystery'
    },
    {
        id: 4,
        image: '/categories4.png',
        genre: 'Fiction'
    },
    {
        id: 5,
        image: '/categories5.png',
        genre: 'Non fiction'
    },
    {
        id: 6,
        image: '/categories6.png',
        genre: 'Horror'
    },
    {
        id: 7,
        image: '/categories7.png',
        genre: 'Thriller'
    }
]
export default function Categories () {
  return (
    <div className="w-full mt-10 flex flex-col gap-4 px-4 md:px-12 lg:px-24 py-2 items-start">
      <h1 className="font-medium text-md md:text-xl">Categories</h1>

      <div className="h-[1px] w-full bg-[#e4ebe4]" />

      <div className="flex flex-row items-start gap-6 md:gap-10">
        {categoriesData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 w-8 md:w-16 items-center"
          >
            <div className="size-10 md:size-16 relative rounded-full border-yellow-300">
              <Image
                src={item.image}
                className="rounded-full"
                fill
                objectFit="cover"
                alt={item.genre}
              />
            </div>
            <p className='font-normal text-sm'>{item.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
