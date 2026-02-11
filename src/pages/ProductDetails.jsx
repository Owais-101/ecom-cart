import React, { useEffect, useState } from 'react';
import { initialProducts } from '../data/product';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Tag } from 'lucide-react';



const ProductDetails = () => {

  const [product, setProduct] = useState(null)

  const { id } = useParams();


  useEffect(() => {

    setProduct(initialProducts.find((item) => item.id === Number(id)));

  }, [id]);

  console.log(product?.image);







  return (
    <div className='bg-gray-700  w-[90%] mx-auto mt-16 rounded-2xl' >

      {!product
        ?

        <h1>Loading...</h1>
        :
        <>
          <Link to="/">
            <div className='flex gap-1 items-center pt-10 pl-7 text-orange-400 mb-16'>
              <ChevronLeft className="w-6 h-6 mt-1" />
              <h2 className='text-2xl font-semibold'>Back to all products</h2>
            </div>
          </Link>

          <div className='w-full flex' >

            {/* image div */}
            <div className='w-[30%] overflow-hidden mt-10 ml-10' >
              <img className='rounded-2xl mb-14' src={product?.image} alt="" />
            </div>

            <div className='w-[50%] mx-auto flex flex-col items-center' >
              <div className='text-left' >
                <h1 className='text-5xl font-bold mt-10 mb-5 text-white' >{product?.name}</h1>
                <p className='text-3xl font-bold mb-4 text-orange-500 ' >₹ {product?.price}</p>
                <div className='flex' >
                  <Tag className='mt-2 mr-2 text-orange-400 ' />
                  <p className='text-2xl text-white font-semibold border-b-2 border-b-orange-700 pb-3 '>Product Overview</p>
                </div>
                <p className='text-xl text-gray-400 mt-3 mb-16' >{product?.description}</p>
              </div>

              <div className='flex flex-col gap-5' >
                <Link>
                  <button className='bg-amber-500 py-5 font-semibold rounded-full w-96 ' > ADD TO CART </button>
                </Link>

                <Link to={'/'} >
                  <button className='border-2 border-orange-500 text-amber-500 py-5 font-semibold rounded-full w-96 cursor-pointer ' > KEEP SHOPPING </button>
                </Link>

              </div>

            </div>

          </div>
        </>
      }


    </div>
  )
}

export default ProductDetails