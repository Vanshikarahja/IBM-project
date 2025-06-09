import React, { useState } from 'react'
import { askGenAi } from '../utils/genai'

const Form = () => {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await askGenAi(query)
    setResponse(result)
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Tell us about your interests..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-2">
          Get Career Path
        </button>
      </form>
      {response && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h3 className="font-bold text-lg">GenAI Suggestion:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  )
}

export default Form