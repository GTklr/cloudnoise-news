import React, {useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext";
import { signInWithGoogle } from '../hooks/useGoogle';
import { useLogout } from '../hooks/useLogout';
import TransitionsIndiv from '../components/transitions/TransitionIndiv';

export default function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {error, login} = useLogin()

const handleSubmit = (e) => {
   e.preventDefault()
   signInWithGoogle()

}
const {user} = useAuthContext()
const {logout} = useLogout()
  


  return (
    <TransitionsIndiv>
   <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <div>
          {!user && <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>}
          {user && <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">You are already signed in</h2>}

		    </div>
        

        <div className="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">
          <form onSubmit={handleSubmit} className="">
            {!user&& <div>
              <label className='block'>
                <span> Email:</span>
                <input className="formField" type="email" onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
              </label>

              <label>
                <span> Password:</span>
                <input className="formField" type="password" onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
              </label>
            </div>}

              {!user && <button type="submit" className="btn">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /> </svg>
                  </span>
                  Sign in
              </button>}
              
                {error && <p>{error}</p>}
          </form>

          {user && <button className="btn" onClick={logout}>Logout</button>}
        </div>
        </div>
    
   </div>
   </TransitionsIndiv>

  )
}
