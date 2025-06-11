import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const productCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert("Product added to cart successfully!");
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-2 rounded" />
      <h3 className="font-semibold">{product.title || product.name}</h3>
      <p className="text-red-600 font-bold mb-2">${product.price}</p>
      <div className="flex text-yellow-400 mb-2">
        <FaStar /><FaStar /><FaStar /><FaStar />
      </div >
      <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition" onClick={ (e) => handleAddToCart(e, product)}>
        <span>+</span>
        <span>Add to Cart</span>
      </button>
    </div>
  )
}

export default productCard
