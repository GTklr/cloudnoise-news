import React, {useState} from 'react'
import TransitionsIndiv from '../components/transitions/TransitionIndiv'
import { useSignup } from '../hooks/useSignup'

export default function SignUp() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {error, signup} = useSignup()

const handleSubmit = (e) => {
   e.preventDefault()
   signup(email, password)
}


  return (
   <TransitionsIndiv>
   <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
         <h2 className="page-title">Sign Up</h2>

            <form onSubmit={handleSubmit} className="text-black">
               <label>
                  <span> Email:</span>
                  <input className="formField" type="email" onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required/>
               </label>

               <label>
                  <span> Password:</span>
                  <input className="formField" type="password" onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required/>
               </label>   

                  <button className="btn purplebtn btn-success">submit</button>
                  {error && <p>{error}</p>}
            </form>
      </div>
   </div>
   </TransitionsIndiv>

  )
}
