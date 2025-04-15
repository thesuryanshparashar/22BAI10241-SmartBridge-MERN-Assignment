import React, { useState } from "react"

const TextUpdater = () => {
  const [text, setText] = useState("")

  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p className="mt-2 text-lg">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater