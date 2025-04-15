import React, { useState } from "react"

export const Form = () => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted:", input)
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 rounded mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something"
      />
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  )
}

