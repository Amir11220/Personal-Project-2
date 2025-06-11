import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Checkout = ({setOrder}) => {
  const cart = useSelector((state) => state.cart);

  const [billing, setBilling] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [shipping, setShipping] = useState({
    name: '',
    address: '',
  });
  const [payment, setPayment] = useState('credit');
  const navigate = useNavigate()

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: '1234',
      shippingInformation: shipping,
      totalPrice: cart.totalPrice
    }
    setOrder(newOrder);
    navigate ('/order-confirmation');
  };

  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-8'>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className='md:w-2/3 space-y-8'>
          <div className='bg-white p-6 rounded shadow-md border'>
            <h4 className='text-lg font-bold mb-4'>Billing Information</h4>
            <input  className='w-full border p-2 mb-3' type='text' placeholder='Full Name' value={billing.name} onChange={e => setBilling({ ...billing, name: e.target.value })}/>
            <input className='w-full border p-2 mb-3' type='email' placeholder='Email' value={billing.email} onChange={e => setBilling({ ...billing, email: e.target.value })} />
            <input className='w-full border p-2 mb-3' type='number' placeholder='Phone Number' value={billing.number} onChange={e => setBilling({ ...billing, number: e.target.value })} />
            <input className='w-full border p-2 mb-3' type='text' placeholder='Billing Address' value={billing.address} onChange={e => setBilling({ ...billing, address: e.target.value })}/>
          </div>
          <div className='bg-white p-6 rounded shadow-md border'>
            <h4 className='text-lg font-bold mb-4'>Shipping Information</h4>
            <input className='w-full border p-2 mb-3' type='text' placeholder='Recipient Name' value={shipping.name} onChange={e => setShipping({ ...shipping, name: e.target.value })} />
            <input className='w-full border p-2 mb-3' type='text' placeholder='Shipping Address' value={shipping.address} onChange={e => setShipping({ ...shipping, address: e.target.value })} />
          </div>
          <div className='bg-white p-6 rounded shadow-md border'>
            <h4 className='text-lg font-bold mb-4'>Payment Method</h4>
            <div className='flex flex-col gap-2'>
              <label>
                <input type='radio' name='payment' value='credit' checked={payment === 'credit'} onChange={() => setPayment('credit')}  className='mr-2' />
                Credit Card
              </label>
              {payment === "credit" && (
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                  <h3 className='text-xl font-semibold mb-4'>Credit Card Information</h3>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                    <input type= "text" placeholder='Enter Card number' className='border p-2 w-full rounded' required/>
                  </div>
                   <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
                    <input type= "text" placeholder='Enter card holder name' className='border p-2 w-full rounded' required/>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                    <input type="text" placeholder='MM/YY' className='border p-2 w-full rounded' />
                  </div>
                  <div className='w-1/2 ml-2'>
                    <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                    <input type="text" placeholder='CVV' className='border p-2 w-full rounded' required />
                  </div>
                </div>
              )}
              <label>
                <input type='radio' name='payment' value='cod' checked={payment === 'cod'} onChange={() => setPayment('cod')}  className='mr-2' />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        <div className='md:w-1/3 bg-white p-6 rounded shadow-md border'>
          <h3 className='text-lg font-bold mb-5'>Order Summary</h3>
          <div className='divide-y'>
            {cart.products.map((product) => (
              <div key={product.id} className='flex items-center py-3'>
                <img src={product.image} alt={product.name} className='w-12 h-12 object-contain rounded mr-3' />
                <div className='flex-1'>
                  <p className='font-semibold'>{product.name}</p>
                  <p className='text-xs text-gray-500'>Qty: {product.quantity}</p>
                </div>
                <div className='text-right'>
                  <p className='font-semibold'>${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='border-t pt-4 mt-4'>
            <div className='flex justify-between mb-2'>
              <span className='font-medium'>Total Items:</span>
              <span>{cart.totalQuantity}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span className='font-medium'>Total Price:</span>
              <span>$   {cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button  className='w-full mt-6 bg-red-600 text-white py-2 rounded hover:bg-red-700' onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
