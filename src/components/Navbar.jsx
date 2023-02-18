import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-slate-800 text-white h-12 flex justify-between items-center">
        <div>
          <h1>home</h1>
        </div>

        <div>
          <a href='/' className='btn'>Login</a>
        </div>

    
    </div>
  )
}
