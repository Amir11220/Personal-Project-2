import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import { setSearchTerm } from '../redux/productSlice'
import Modal from './Modal'

const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search Product" className="w-full border py-2 px-4" onChange={(e) => setSearch(e.target.value)} />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className='relative'>
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className='hidden md:block'
            onClick={() => {
              setIsLogin(true);
              setIsModalOpen(true);
            }}
          >
            Login
          </button>
          <button
            className='hidden md:block'
            onClick={() => {
              setIsLogin(false);
              setIsModalOpen(true);
            }}
          >
            Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/Shop">Shop</Link>
        <Link className="hover:underline" to="/Contact">Contact</Link>
        <Link className="hover:underline" to="/about">About</Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <>
            <Login />
            <div className="text-center mt-4">
              <span>Don't have an account? </span>
              <button className="text-red-800" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </div>
          </>
        ) : (
          <>
            <Register />
            <div className="text-center mt-4">
              <span>Already have an account? </span>
              <button className="text-red-800" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </div>
          </>
        )}
      </Modal>
      <Link className="hover:underline" to="/Contact"></Link>
      <Link className="hover:underline" to="/About"></Link>
    </nav>
  )
}

export default Navbar
