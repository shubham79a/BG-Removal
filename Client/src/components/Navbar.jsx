import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {
    const { isSignedIn, user } = useUser()
    const { openSignIn } = useClerk()

    return (
        <div>
            <div className='flex items-center mx-4 py-3 sm:mx-28 lg:mx-44 justify-between'>
                <Link to='/' ><img className='w - 32 sm: w - 44' src={assets.logo} alt="" /></Link>

                {
                    isSignedIn
                        ?
                        <div>
                            <UserButton />
                        </div>
                        :
                        <button onClick={() => openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 text-sm rounded-full' > Get Started
                            <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
                        </button>
                }


            </div>
        </div>
    )
}

export default Navbar
