import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/productCard'


const FilterData = () => {
  const filterProducts = useSelector(state => state.product.filteredData) || []
  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
      <h2 className="text-2xl font-bold mt-8 mb-4">Shop</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filterProducts.length > 0 ? (
          filterProducts.map((product, idx) => (
            <ProductCard key={product.id || idx} product={product} />
          ))
        ) : (
          <div className="col-span-4 text-center text-gray-500">No products found.</div>
        )}
      </div>
    </div>
  )
}

export default FilterData
