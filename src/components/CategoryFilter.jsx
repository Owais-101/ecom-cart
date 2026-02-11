import React, { useState } from 'react'
import { Funnel } from 'lucide-react';
import { initialProducts } from '../data/product';




const CategoryFilter = () => {

  const categoryArray = ['All', ...new Set(initialProducts.map(p => p.category))];

  const [selectedCategory, setselectedCategory] = useState("All");

  return (

    <div className='w-[90%] mx-auto h-25 mt-10'>

      <div className='flex items-center text-gray-300 h-full border-b-2 border-gray-400 ' >
        <Funnel className='mx-5 text-orange-400' />
        {categoryArray.map((category, idx) => (
          <div
            key={idx}
            className={` border-2 cursor-pointer px-6 py-2 rounded-full outline-0 mr-3
            ${selectedCategory === category && 'bg-orange-500 text-white border-orange-700 '}`}
            onClick={(e) => {
              setselectedCategory(e.target.innerText);
            }} >
            <h2>{category}</h2>
          </div>
        ))}
      </div>

    </div>

  )
}

export default CategoryFilter