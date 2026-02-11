import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-950 font-sans' >
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
