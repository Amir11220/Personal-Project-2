import React from 'react'
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTags } from 'react-icons/fa';

const InfoSection = () => {
    const infoItems = [
        {
            title: "Free Shipping",
            description: "On all orders over $50",
            icon: <FaShippingFast className="text-3xl text-red-600" />
        },
        {
            title: "24/7 Support",
            description: "We're here to help you anytime",
            icon: <FaHeadset className="text-3xl text-red-600" />
        },
        {
            title: "Easy Returns",
            description: "30-day hassle-free returns",
            icon: <FaMoneyBillWave className="text-3xl text-red-600" />
        },
        {
            title: "Payment Secure",
            description: "Your Payment Information is safe with us",
            icon: <FaLock className="text-3xl text-red-600" />
        },
        {
            title: "Discount",
            description: "Enjoy the best prices on our products",
            icon: <FaTags className="text-3xl text-red-600" />
        }, 
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection
