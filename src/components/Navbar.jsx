import React from 'react'
import { House } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <header>

      <nav className='flex justify-between items-center px-20 py-4 sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/95 border-b border-orange-900 ' >

        <Link to={'./'} >
          <div className='flex items-center gap-2' >
            <div className="logo text-orange-400 ">
              <House className='w-8 h-8' />
            </div>
            <h1 className='title text-4xl uppercase font-bold tracking-widest cursor-pointer '>wdm<span className='text-orange-400' >store</span></h1>
          </div>
        </Link>

        <Link to={'/cart'}>
          <div className=' relative cart-icon bg-amber-600 p-2 flex items-center justify-center rounded-2xl '>
            <ShoppingCart className='w-8 h-8 ' />
            <div className=" absolute w-5 h-5 flex items-center justify-center -top-2 -right-1 bg-red-500 p-1 rounded-[50%]  ">1</div>
          </div>
        </Link>

      </nav>

    </header>

  )
}

export default Navbar