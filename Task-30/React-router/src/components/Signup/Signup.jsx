import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Signup() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
    
    <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

    <form className="space-y-4">
      
      <div>
        <label className="block text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          placeholder="Create password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center text-sm">
        <input type="checkbox" className="mr-2" />
        <span>I agree to the terms & conditions</span>
      </div>

      <button 
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
      >
        Sign Up
      </button>

      <p className="text-center text-sm mt-4">
        Already have an account?
        <NavLink to="/login" className="text-indigo-500 hover:underline">Login</NavLink>
      </p>

    </form>

  </div>
</div>
    </div>
  )
}

export default Signup
