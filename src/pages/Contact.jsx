import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-8 text-gray-600">
        Have a question or feedback? Fill out the form below and we'll get back to you soon.
      </p>
      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
          Thank you for contacting us! We will respond as soon as possible.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}

export default Contact
