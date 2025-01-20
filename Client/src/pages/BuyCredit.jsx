import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {

  const { backendUrl, loadCreditsData, } = useContext(AppContext)
  const navigate = useNavigate()

  const { getToken } = useAuth()

  const initPay = async (order) => {

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        const token = await getToken()
        try {

          const { data } = await axios.post(backendUrl + '/api/user/verify-razor', response, { headers: { token } })
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success(data.message)
          }


        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()

  }


  const paymentRazorpay = async (planId) => {
    try {
      const token = await getToken()
      console.log(token);

      const { data } = await axios.post(backendUrl + "/api/user/pay-razor", { planId }, { headers: { token } })

      if (data.success) {
        initPay(data.order)
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }




  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 px-4 lg:px-44 sm:px-28 '>
      <button className=' border border-gray-400 px-10 py-2 rounded-full mb-6'>OUR PLANS</button>
      <h1 className=' font-bold  text-2xl text-center bg-gradient-to-r from-slate-900 to-slate-300 text-transparent bg-clip-text mb-6 sm:mb-10'>Choose the plan that`s right for you </h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>

        {plans.map((item, index) => (
          <div className=' bg-white drop-shadow-sm border rounded-lg py-12  px-8 text-gray-700 hover:scale-105 transition-all duration-500 ' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 font-semibold'>{item.id} </p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium  '>${item.price}</span>
              / {item.credits} credit
            </p>
            <button onClick={() => paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-44 '>Purchase</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default BuyCredit
