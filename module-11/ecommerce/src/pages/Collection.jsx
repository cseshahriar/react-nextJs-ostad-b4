import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getProduct } from '../api/products'
import ProductCard from '../components/commerce-ui/product-cards'
import PaginationDemo from '../components/commerce-ui/Pagination'
import { SkeletonCard } from '../components/commerce-ui/ProductSkeleton'

const limit = 2

const Collection = () => {
  const [offset, setOffset] = useState(0)

  console.log(limit, offset);

  const { data, isLoading } = useQuery({
    queryKey: ['products', offset],
    queryFn: () => getProduct(offset, limit),
  })

  console.log('data ', data?.products)

  const handlePageChange = (page) => {
    const newOffset = (page - 1) * limit
    setOffset(newOffset)
  }

  return (
    <div className='flex flex-col px-6 py-6'>
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full'>
        {isLoading
          ? Array.from({ length: limit }, (_, index) => <SkeletonCard key={index} />)
          : data?.products?.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description?.substring(0, 80)}
                price={product.price}
                imageUrl={product.images[0]}
              />
            ))}
      </div>

      <div className="mt-6">
        <PaginationDemo
          offset={offset}
          limit={limit}
          total={data?.totalItems || 0}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}

export default Collection
