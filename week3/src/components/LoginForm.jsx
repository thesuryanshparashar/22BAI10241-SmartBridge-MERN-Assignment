import React, { useState } from "react"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email: ${email}\nPassword: ${password}`)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-purple-500 text-white rounded px-4 py-2 hover:bg-purple-700 w-full"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
