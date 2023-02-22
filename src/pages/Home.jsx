import React from 'react'
import Transitions from '../components/transitions/TransitionZoom'

export default function Home() {
  return (
    <Transitions>
        <div className='flex justify-center items-center h-screen'>
            <div className='py-10 '>
                <div className='text-center'>
                    <h1 className='font-bold text-5xl text-white pb-4'>Home</h1>
                </div>
            </div>
        </div>
    </Transitions>
  )
}
