import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks';

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(username, password)
    if (success) {
      navigate('/assets')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  )
}
