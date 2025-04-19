import React from 'react'
import { useParams } from 'react-router-dom'

import BreadcrumbWithCustomSeparator from '../components/Breadcrumb'
import ProductCard from '../components/commerce-ui/product-cards'

const Collection = () => {
  return (
    <div className='flex flex-col px-6 py-6'>
        <BreadcrumbWithCustomSeparator items={[
          {name: "Collections", path: "/collections"},
          {name: "Item 1", path: "/collections/item1"},
          {name: "Item 2", path: "/collections/item2"},
        ]} />

        {/** list of products */}
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-full'>
          {
            Array.from({length: 4}, (_, index) => (
              <ProductCard />
            ))
          }
        </div>

    </div>
  )
}

export default Collection