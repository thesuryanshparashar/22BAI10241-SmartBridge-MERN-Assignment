import React from "react"

const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!")
  }

  return (
    <button
      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Click Me
    </button>
  )
}

export default Button
