import React from 'react'

function Login() {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">

                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                        >
                            Login
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
