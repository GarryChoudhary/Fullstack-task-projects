import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-900 text-gray-300 py-8">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>
      <h2 class="text-xl font-bold text-white mb-2">MyApp</h2>
      <p class="text-sm">
        Here is the footer section and you can access Quick links from here.
      </p>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white mb-2 ">Quick Links</h3>
      <ul class="space-y-1 text-sm flex flex-col">
        <NavLink to="/Home" class="hover:text-white">Home</NavLink>
        <NavLink to="/login" class="hover:text-white">Login</NavLink>
        <NavLink to="/signup" class="hover:text-white">Contact</NavLink>
      </ul>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white mb-2">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white">Facebook</a>
        <a href="#" class="hover:text-white">Twitter</a>
        <a href="#" class="hover:text-white">Instagram</a>
      </div>
    </div>

  </div>

  <div class="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
    © 2026 Garry. All rights reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer
