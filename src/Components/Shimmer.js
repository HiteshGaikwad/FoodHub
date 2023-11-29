
import React from 'react'
import RestraurantCard from './RestraurantCard';

const Shimmer=()=> {
  return (
    <>
    <div className="flex max-sm:flex-col sm:flex-wrap max-sm:w-screen sm:gap-5 gap-3 sm:my-5 sm:ml-16">
    {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="sm:w-80 w-full max-sm:px-3 max-sm:py-2 h-64 sm:h-72 flex gap-1 flex-col p-1 sm:gap-2">
            <div className="w-full sm:w-72 h-2/3 sm:h-48 bg-gray-300 rounded-xl sm:rounded-md"></div>
            <p className="sm:w-64 w-64 h-6 sm:h-7 bg-gray-300 rounded-md"></p>
            <p className='sm:w-56 w-44 h-6 sm:h-7 bg-gray-300 rounded-md'></p>
          </div>
        ))}
    </div>
    </>
  )
}

export default Shimmer;