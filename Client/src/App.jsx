import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <ToastContainer position='bottom-right' />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />


        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
