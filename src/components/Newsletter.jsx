'use client'

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function NewsletterSubscription() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        console.log('Subscribing email:', email)
        toast.success('Thank you for subscribing!')
        setEmail('')
    }

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Stay up to date, join our newsletter
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-grow">
                            <input
                                name="email"
                                type="email"
                                id="email"
                                placeholder="Enter Your Email"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                        >
                            Let's talk
                        </button>
                    </div>
                </form>
                <ToastContainer position="bottom-right" autoClose={3000} />
            </div>
        </div>
    )
}

