// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
// import Filter from '../../components/filter/Filter'
// import ProductCard from '../../components/productCard/ProductCard'
import Carousel from '../../components/carousel/Carousel'
import AboutUs from '../../components/aboutUs/AboutUs'
// import Track from '../../components/track/Track'
// import Testimonial from '../../components/testimonial/Testimonial'
// import { useDispatch } from 'react-redux'
// import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import './Home.css';

function Home() {
  // const dispatch = useDispatch(); 
  // const cartItem = useSelector((state) => state.cart)

  
  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // }

  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // }
  return (
    <Layout>
      <HeroSection/>
      <AboutUs/>
      <Carousel/>
      {/* <Filter/>
      <ProductCard/> */}
      {/* <Track/> */}
      {/* <Testimonial/> */}
    </Layout>
  )
}

export default Home