import React from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CartContext'
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';


const ProductList = () => {

  const { product, addToCart } = useCart();

  return (
    <>
      <div>
        <SearchFilter />
        <CategoryFilter />
      </div>

      {/* Main section */}
      <div className='w-[90%] mx-auto' >
        <div>
          <h2 className='text-2xl font-bold text-white my-5' >Featured Gear ({product.length} Items)</h2>
        </div>

        {/* product list div */}

        <div className='flex gap-10 flex-wrap justify-center'>
          {product.map((item, idx) => {
            const { name, price, image, description, category, id } = item
             return (
                <div key={idx} className="bg-gray-800 w-[20%] rounded-3xl overflow-hidden mb-8 flex flex-col">

                  {/* Image Section */}
                  <div className="relative h-[50%] w-full overflow-hidden">
                    <Link to={`/product/${id}`} >
                      <img
                        className="w-full h-full object-cover cursor-pointer transition-all hover:scale-105"
                        src={image}
                        alt={name}
                      />
                    </Link>

                    <p className="bottom-0 absolute w-[35%] text-center bg-orange-600 px-4 py-1 rounded-tr-xl text-white font-bold">
                      ₹{price}
                    </p>
                  </div>

                  {/* Content Section */}
                  <div className="py-3 px-5 flex flex-col grow">

                    {/* This wrapper grows and pushes button down */}
                    <div className="grow">
                      <h2 className="text-2xl font-bold text-white mb-2 truncate">
                        {name}
                      </h2>

                      <p className="mb-2 text-gray-100">
                        {description}
                      </p>

                      <span className="border-2 border-gray-400 text-gray-100 bg-gray-600 px-3 py-1 rounded-full text-[0.7rem] block w-fit">
                        {category}
                      </span>
                    </div>

                    {/* Button always at bottom */}
                    <div
                      onClick={() => addToCart(item)}
                      className="flex px-20 py-4 text-white bg-orange-600 rounded-full w-fit mx-auto  mb-4">
                      <ShoppingCart className="mr-3" />
                      <button

                        className="uppercase font-semibold cursor-pointer">
                        Add To Cart
                      </button>
                    </div>

                  </div>
                </div>
              )
          })}
        </div>


      </div>
    </>
  )
}

export default ProductList