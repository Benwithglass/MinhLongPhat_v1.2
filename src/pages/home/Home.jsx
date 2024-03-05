// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
// import Track from '../../components/track/Track'
// import Testimonial from '../../components/testimonial/Testimonial'
import { useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

function Home() {
  const dispatch = useDispatch(); 
  // const cartItem = useSelector((state) => state.cart)

  
  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
       <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      {/* <Track/> */}
      {/* <Testimonial/> */}
    </Layout>
  )
}

export default Home