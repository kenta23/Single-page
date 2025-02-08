import React from 'react'
import Image from 'next/image';


const recommendedData = [
  {
    id: 1,
    image: '/book5.png',
    title: 'The Whistler',
    author: 'Nick Medina'
  },
  {
    id: 2,
    image: '/book6.png',
    title: 'A Curse of Shadows and Ice',
    author: 'Catharina Maura'
  },
  {
    id: 3,
    image: '/book7.png',
    title: 'And After All: A Fan History of Oasis',
    author: 'Melissa Locker'
  },
  {
    id: 4,
    image: '/book8.png',
    title: 'The Wilderness',
    author: 'Angela Flournoy'
  },
  {
    id: 5,
    image: '/book9.png',
    title: 'Hot Wax',
    author: 'M.L. Rio'
  },
  {
    id: 6,
    image: '/book10.png',
    title: 'The Night Circus',
    author: 'Erin Morgenstern'
  },
  
];



export default function Recommended() {
  return (
    <div className="w-full bg-[#fffaec] mt-16 space-y-7 h-auto px-4 md:px-12 lg:px-24 py-6">
      <div className="flex flex-row gap-1 items-center">
        <h1 className="font-medium text-xl">Recommended</h1>
      </div>
 
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex flex-row gap-8 w-full justify-between items-start">
        {recommendedData.map((item) => (
          <div key={item.id} className="flex gap-3 cursor-pointer flex-col items-center">
              <div className='relative rounded-lg w-[80px] h-[120px] md:w-[100px] md:h-[150px] lg:w-[170px] lg:h-[200px]'>
                 <Image alt={item.title} src={item.image} fill objectFit='cover' className='rounded-lg shadow-md' />
              </div>

              <div className='max-w-full'>
                <p className='text-wrap font-medium text-md lg:text-lg text-center'>{item.title}</p>
                 <p className='text-[#3d3d3d] text-sm lg:text-md text-center text-wrap '>{item.author}</p>
              </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}
