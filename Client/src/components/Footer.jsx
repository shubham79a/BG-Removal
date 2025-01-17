import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' flex justify-between items-center gap-4 py-4 px-4 lg:px-44 sm:px-28'>
      <img width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm max-sm:hidden text-gray-500'>Copyright Shubham | All right reserved.</p>
      <div className='flex gap-1'>
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />
      </div>

    </div>
  )
}

export default Footer
