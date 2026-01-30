import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData(wixiihore => ({
      ...wixiihore,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All Feilds required ")
      return;
    }

    // reset 

    toast.success("login Successfully");
  }

  return (
    <div className='h-[820px] py-20 bg-slate-100 flex items-center justify-center p-6'>
      <div className='bg-slate-50 p-8 rounded-2xl shadow-md w-full max-w-md'>
        <h1 className='text-center font-semibold text-slate-400 text-2xl'>Reset Password</h1>
        <form className='flex flex-col gap-5 pt-10' onSubmit={handleSubmit}>
          <input onChange={handleChange} id='email' name="email" type="text" className='border border-slate-400 px-4 py-2.5 rounded-md ' placeholder='YourEmail@gmail.com' />
          <button type='submit' className='px-4 py-3 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer text-white'>Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword