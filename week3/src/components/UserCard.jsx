import React from "react"

const UserCard = ({ name, email }) => {
  return (
    <div className="bg-gray-400 shadow-lg rounded p-4 m-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-black-800">{name}</h2>
      <p className="text-gray-800">{email}</p>
    </div>
  )
}

export default UserCard
