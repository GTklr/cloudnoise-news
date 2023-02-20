import {Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="bg-slate-800 text-white h-12 flex justify-between items-center">
        <div>
          <ul className="flex justify-start">
            <li className="ml-5 p-2"><Link to="/">Home</Link></li>
            <li className="p-2"><Link to="/about">About</Link></li>
            <li className="p-2"><Link to="/blog">Blog</Link></li>
            <li className="p-2"><Link to="/artists">Artists</Link></li>
            <li className="p-2"><Link to="/contact">Contact</Link></li>
            <li className="p-2"><Link to="/create">Create</Link></li>
            <li className="p-2"><Link to="/login">Login</Link></li>
            <li className="p-2"><Link to="/signup">Signup</Link></li>
          </ul>
        </div>

        <div>
          <a href='/' className='btn mr-5'>Login</a>
        </div>

    
    </div>
  )
}
