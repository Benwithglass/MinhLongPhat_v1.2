// eslint-disable-next-line no-unused-vars
import React from 'react'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/productCard/ProductCard'
import Filter from '../../components/filter/Filter'

function AllProducts() {
  return (
    <Layout>
      <Filter/>
      <ProductCard/>
    </Layout>
  )
}

export default AllProducts