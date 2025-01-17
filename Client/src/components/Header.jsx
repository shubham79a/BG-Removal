import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 lg:px-44 sm:px-28 sm:mt-20'>
            {/* left side */}
            <div >
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight '>
                    Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 text-transparent bg-clip-text'>background</span> from <br className='max-md:hidden' /> images for free.</h1>
                <p className='my-6 text-[15px] text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing <br className='max-sm:hidden' /> elit. A, dolor! Lorem ipsum dolor sit amet.</p>
                <div>
                    <input type="file" id='upload1' hidden />
                    <label className='inline-flex gap-3 py-3.5 px-8 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700' htmlFor="upload1">
                        <img className='' width={20} src={assets.upload_btn_icon} alt="" />
                        <p className='text-white text-sm'>Upload your image</p>
                    </label>
                </div>
            </div>
            {/* right side  */}
            <div className='w-full max-w-md'>
                <img className='' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header
