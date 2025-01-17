import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
    return (
        <div className='py-10 sm:py-28 mx-4 sm:mx-28 lg:mx-44'>
            <p className='font-bold mb-10 text-2xl text-center bg-gradient-to-r from-slate-900 to-slate-300 text-transparent bg-clip-text'>Steps to remove background <br /> image in seconds </p>
            <div className='flex items-start flex-wrap justify-center gap-4 '>
                <div className='bg-white px-5 pr-8 py-6 flex gap-3 rounded-md border border-gray-300 items-start hover:scale-105 transition-all duration-500 '>
                    <img className='w-8' src={assets.upload_icon} alt="" />
                    <div className='flex flex-col gap-2 '>
                        <p className='text-black text-xl font-medium '>Upload image</p>
                        <p className='text-neutral-500 text-sm'> Upload your image here to <br /> remove the background</p>
                    </div>
                </div>
                <div className='bg-white px-5 pr-8 py-6 flex gap-3 rounded-md border border-gray-300 items-start hover:scale-105 transition-all duration-500 '>
                    <img className='w-8' src={assets.upload_icon} alt="" />
                    <div className='flex flex-col gap-2 '>
                        <p className='text-black text-xl font-medium '>Upload image</p>
                        <p className='text-neutral-500 text-sm'> Upload your image here to <br /> remove the background</p>
                    </div>
                </div>
                <div className='bg-white px-5 pr-8 py-6 flex gap-3 rounded-md border border-gray-300 items-start hover:scale-105 transition-all duration-500 '>
                    <img className='w-8' src={assets.upload_icon} alt="" />
                    <div className='flex flex-col gap-2 '>
                        <p className='text-black text-xl font-medium '>Upload image</p>
                        <p className='text-neutral-500 text-sm'> Upload your image here to <br /> remove the background</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Steps
