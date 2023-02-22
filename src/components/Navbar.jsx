import {Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";


export default function Navbar() {
  const {user} = useAuthContext()


  return (
    <div className="text-white h-12 flex justify-between items-center fixed top-0 w-full">
        <div>
          <ul className="flex justify-start">
            <li className="ml-5 p-2"><Link to="/home">Home</Link></li>
            <li className="p-2"><Link to="/about">About</Link></li>
            <li className="p-2"><Link to="/blog">Blog</Link></li>
            <li className="p-2"><Link to="/artists">Artists</Link></li>
            <li className="p-2"><Link to="/contact">Contact</Link></li>
            <li className="p-2"><Link to="/create">Create</Link></li>
            <li className="p-2"><Link to="/login">Login</Link></li>
            <li className="p-2"><Link to="/signup">Signup</Link></li>
            <li className="p-2"><Link to={`/profile/${user?.displayName}`}>profile</Link></li>
            
          </ul>

          
        </div>

        <p className="flex justify-end">hi, {user?.displayName}</p>

    
    </div>
  )
}
