import React from 'react'
import TransitionsIndiv from '../components/transitions/TransitionIndiv'

export default function Contact() {
  return (
    <TransitionsIndiv>
      <div className="flex justify-center items-center h-screen">
        <div className='p-10 shadow-lg mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl text-white pb-4'>Contact</h1>
                {/* TODO insert endpoint */}
                <div>
                  <form action="" className=''>
                    <input type="text" placeholder='name' className='formField'/>
                    <input type="email" placeholder='email' className='formField'/>
                    <input type="text" placeholder='subject' className='formField'/>
                    <textarea name="message" placeholder='message' id="" cols="30" rows="3" className='formField'></textarea>
                    <button className='btn'>submit</button>
                
                  </form>
                </div>
            </div>
        </div>
      </div>
    </TransitionsIndiv>
  )
}

