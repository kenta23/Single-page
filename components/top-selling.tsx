import { Crown } from 'lucide-react'
import React from 'react'
import Image from 'next/image';

const productsData = [
    {
        id: 1, 
        image: '/book1.png',
        title: 'Atomic Habits PH Edition by James Clear',
        price: '₱495.00'
    },
    {
        id: 2, 
        image: '/book2.png',
        title: 'Onyx Storm by Rebecca Yarros',
        price: '₱860.00'
    },
    {
        id: 3, 
        image: '/book3.png',
        title: 'Iron Flame by Rebecca Yarros',
        price: '₱749.00'
    },
    {
        id: 4, 
        image: '/book4.png',
        title: 'The Daily Stoic (Ryan Holiday & Stephen Hanselman)',
        price: '₱960.00'
    } 
];


export default function TopSellingProducts() {
  return (
    <div className="w-full mt-10 space-y-7 h-auto px-4 md:px-12 lg:px-24 py-2">
      <div className="flex flex-row gap-1 items-center">
        <Crown color="#F08E39" fill="#F08E39" size={20} />
        <h1 className="font-medium text-xl">Top Selling books</h1>
      </div>

      <div className="flex flex-col md:grid grid-cols-2 gap-10 w-full items-start">
        {productsData.map((item) => (
          <div key={item.id} className="flex gap-6 cursor-pointer flex-row items-start">
              <div className='relative w-[170px] h-[200px]'>
                 <Image className='rounded-lg shadow-md' alt={item.title} src={item.image} fill objectFit='cover' />
              </div>

              <div className='flex-col max-w-[200px] md:max-w-[220px] lg:max-w-full flex gap-2 items-start'>
                  <p className='text-lg: lg:text-xl text-wrap font-medium'>{item.title}</p>
                  <p className='text-md lg:text-lg text-wrap font-medium text-red-500'>{item.price}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
