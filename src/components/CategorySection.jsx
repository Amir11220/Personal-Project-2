import React from 'react'
import MenCategory from '../assets/images/men.jpg'
import WomanCategory from '../assets/images/women.jpg'
import KidsCategory from '../assets/images/kids.jpg'

const CategorySection = () => {
  const categories = [
    {
      title: 'Men',
      imageUrl: MenCategory,
    },
    {
      title: 'Women',
      imageUrl: WomanCategory,
    },
    {
      title: 'Kids',
      imageUrl: KidsCategory,
    },
  ]

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <img src={category.imageUrl} alt={category.title} className="w-full h-64 object-cover mb-4" />
          <p className="text-lg font-semibold">{category.title}</p>
          <p className="text-red-600 font-bold cursor-pointer mb-4 hover:underline">View All</p>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
