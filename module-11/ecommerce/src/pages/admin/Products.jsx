import React, { useEffect, useState } from 'react'
import { SiteHeader } from "@/components/site-header"
import ProductTable from '../../components/ProductTable'
import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../../api/products';
import { Link } from 'react-router-dom'

const Products = () => {
  const productQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProduct()
  });

  console.log('product query ', productQuery.data);
  useEffect(() => {

  }, [])

  if(productQuery.isError) return <p>Error: {productQuery.error.message}</p>
  if(productQuery.isLoading || !productQuery.data) return <p>Loading...</p>

  return (
    <div>
        <SiteHeader title="Product" />
        <h3 className='mb-6'>
          Product List
          <Link to="/admin/products/create" class="float-right mr-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">New Product</Link>
        </h3>

        <ProductTable products={productQuery.data} />
    </div>
  )
}

export default Products