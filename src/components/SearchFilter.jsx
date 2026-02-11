import React from 'react'
import { Search } from 'lucide-react';


const SearchFilter = () => {
  return (
  <div className="w-[90%] mx-auto bg-gray-900 mt-10 rounded-2xl p-4">
  <div className="relative w-full">
    
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

    <input
      type="text"
      placeholder="Search by name or feature..."
      className="w-full py-4 pl-12 pr-4 rounded-2xl bg-gray-800 border-2 border-orange-500 text-gray-300 focus:outline-none"
      aria-label='Search Product'
    />

  </div>
</div>

  )
}

export default SearchFilter