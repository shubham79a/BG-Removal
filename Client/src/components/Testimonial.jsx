import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
    return (
        <div className=' mx-4 sm:mx-28 lg:mx-44'>
            {/* title */}
            <h1 className='font-bold mb-10 text-2xl text-center bg-gradient-to-r from-slate-900 to-slate-300 text-transparent bg-clip-text py-5'>Customer Testinomials</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8 '>
                {
                    testimonialsData.map((item, index) => (
                        <div className='bg-white rounded-lg p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700' key={index}>
                            <p className='text-4xl text-gray-500'>"</p>
                            <p className='text-sm text-gray-500'>{item.text}</p>
                            <div className='flex items-center gap-3 mt-5'>
                                <img className='w-9 rounded-full' src={item.image} alt="" />
                                <div>
                                    <p className=''>{item.author}</p>
                                    <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Testimonial
