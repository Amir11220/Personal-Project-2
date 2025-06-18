import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from './components/footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/cart'
import './index.css';
import Checkout from './pages/Checkout.jsx';
import Order from './pages/Order.jsx'
import Login from './components/Login.jsx'
import FilterData from './pages/FilterData.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [order, setOrder] = useState(null)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
        <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
