import React, { useState } from 'react'
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
const Register = () => {
  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState("")
  const [errMessge,setErrMessge] = useState('')
  const handleRegister=async(e)=>{
    e.preventDefault();
    if(Email==='') alert('pleas type your email')
    try{
      const res = await createUserWithEmailAndPassword(auth,Email,Password)
      console.log('User registered:', res.user);
    }catch(err){
     if(err.code==='auth/email-already-in-use'){
      setErrMessge('email is in use already use another email')
     }
      console.error('Error registering user:', err);
    }
    
  }
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        {/* <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your name
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Shubham Sarda"
            required
            autocomplete="off"
          ></input>
        </div> */}
        <div className="mb-6">
          <p className='text-red-600 text-lg'>{errMessge}</p>
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="shubham@example.com"
            required
            autocomplete="off"
           onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Passwrod
          </label>
          <input
            type="Passowrd"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <button
        onClick={handleRegister}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </main>
  )
}


export default Register