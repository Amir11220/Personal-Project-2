import React from 'react'

const About = () => {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6">About E-Shop</h2>
      <p className="mb-4 text-gray-700">
        Welcome to <span className="font-semibold text-red-600">E-Shop</span>! We are passionate about providing you with the best online shopping experience. Our platform offers a wide variety of products, from the latest electronics to stylish fashion and everyday essentials.
      </p>
      <p className="mb-4 text-gray-700">
        Our mission is to make shopping easy, enjoyable, and accessible for everyone. We carefully select our products and work with trusted suppliers to ensure quality and satisfaction.
      </p>
      <p className="mb-4 text-gray-700">
        <span className="font-semibold">Why shop with us?</span>
        <ul className="list-disc ml-6 mt-2">
          <li>Wide selection of quality products</li>
          <li>Secure and easy checkout process</li>
          <li>Fast shipping and reliable delivery</li>
          <li>Friendly customer support</li>
        </ul>
      </p>
      <p className="text-gray-700">
        Thank you for choosing E-Shop. We look forward to serving you!
      </p>
    </div>
  )
}

export default About
