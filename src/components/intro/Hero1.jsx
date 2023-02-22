import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"
import cnLogo from "../../assets/cnLogo.png"

export default function Hero1() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='py-10 '>
            <div className='text-center' style={{ width: '500px' }}>
              <img src={cnLogo} className="w-full"/>
                <div className="mt-5">
                <Link to="/home" className=' rounded-sm py-1 px-4 hover:bg-white text-primary hover:text-secondary'>TAKE FLIGHT</Link>
                </div>
            </div>
        </div>


    </div>
  )
}
