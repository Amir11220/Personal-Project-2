import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/productCard.jsx';

const Shop = () => {
    const products = useSelector(state => state.product.products);
  return (
             <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
                <h2 className="text-2xl font-bold mt-8 mb-4">Shop</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                      {Array.isArray(products) && products.map((product, idx) => (
                        <ProductCard key={product.id || idx} product={product} />
                      ))}
                    </div>
                </div>
  )
}

export default Shop
