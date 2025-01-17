import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RemoveBGad = () => {
    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

    return (
        <div>
            <div className='pb-10 mx-4 md:py-20 sm:mx-28 lg:mx-44 '>
                <p className='font-bold mb-12 sm:mb-20 text-2xl text-center bg-gradient-to-r from-slate-900 to-slate-300 text-transparent bg-clip-text'>
                    Remove Background With High  <br />Quality and Accuracy  </p>
                <div className='relative  w-full max-w-3xl overflow-hidden m-auto  rounded-xl'>
                    {/* bg image */}
                    <img src={assets.image_w_bg} style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0 )` }} alt="" />
                    {/* forground image */}
                    <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} alt="" />
                    {/* slider */}
                    <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider ' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} />
                </div>
            </div>

        </div>
    )
}

export default RemoveBGad
