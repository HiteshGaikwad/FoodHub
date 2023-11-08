
import React from 'react'
import RestraurantCard from './RestraurantCard';

const Shimmer=()=> {
  return (
    <>
    <div className="flex flex-wrap max-sm:h-screen sm:gap-5 gap-3 sm:my-5 mr-0 ml-10 sm:ml-16">
    {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="sm:w-80 sm:h-72 flex gap-1 flex-col p-1 sm:gap-2">
            <div className="w-20 sm:w-72 h-20 sm:h-48 bg-gray-300 rounded-md"></div>
            <p className="sm:w-64 w-12 h-4 sm:h-7 bg-gray-300 rounded-md"></p>
            <p className='sm:w-56 w-10 h-4 sm:h-7 bg-gray-300 rounded-md'></p>
          </div>
        ))}
    </div>
    </>
  )
}

export default Shimmer;