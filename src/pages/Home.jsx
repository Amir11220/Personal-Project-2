import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData.jsx'
import HeroImage from '../assets/images/hero-image.jpg'
import InfoSection from '../components/InfoSection.jsx'
import CategorySection from '../components/CategorySection.jsx'
import { setProducts } from "../redux/productSlice.jsx"
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/productCard.jsx';
import Shop from './Shop.jsx';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        {/* Categories */}
        <div className='w-full md:w-3/12'>
          <div>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
            <ul className='space-y-3 bg-gray-100 p-3 border'>
              {Categories.map((category, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 bg-red-500 rounded-full mr-2'></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Image */}
        <div className='w-full md:w-9/12 flex items-center justify-center relative'>
          <img src={HeroImage} alt=" " className="w-full h-auto object-cover" />
          <div className='absolute top-16 left-8'>
            <button  className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105' onClick={()=>navigate('/Shop') }>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />

      <div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {Array.isArray(products) && products.slice(0, 5).map((product, idx) => (
                <ProductCard key={product.id || idx} product={product} />
              ))}
            </div>
        </div>
      </div>
      <Shop />
      </div>
  )
}

export default Home
