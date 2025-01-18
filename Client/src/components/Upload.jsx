import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Upload = () => {

    const { removeBG } = useContext(AppContext)

    return (
        <div className='mx-4 sm:mx-28 lg:mx-44'>
            {/* title */}
            <h1 className='font-bold mb-10 text-2xl text-center bg-gradient-to-r from-slate-900 to-slate-300 text-transparent bg-clip-text py-5'>See the magic. Try now</h1>
            <div className='text-center mb-24'>
                <input onChange={(e) => removeBG(e.target.files[0])} type="file" accept='image/*' id='upload2' hidden />
                <label className='inline-flex gap-3 py-3.5 px-8 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700' htmlFor="upload2">
                    <img className='' width={20} src={assets.upload_btn_icon} alt="" />
                    <p className='text-white text-sm'>Upload your image</p>
                </label>
            </div>
        </div>
    )
}

export default Upload
