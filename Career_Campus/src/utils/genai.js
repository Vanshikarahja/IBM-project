// utils/genai.js
import axios from 'axios'

const API_KEY = import.meta.env.VITE_IBM_API_KEY
const PROJECT_ID = import.meta.env.VITE_IBM_PROJECT_ID
const IBM_URL = import.meta.env.VITE_IBM_URL

export const askGenAi = async (prompt) => {
  try {
    const response = await axios.post(
      IBM_URL,
      {
        input: [{ role: 'user', content: prompt }],
        model_id: 'google/flan-t5-xl', // or any other available model
        parameters: {
          decoding_method: 'greedy',
          max_new_tokens: 150,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'X-Watson-Project-Id': PROJECT_ID,
        },
      }
    )

    return response.data.results[0].generated_text
  } catch (error) {
    console.error('GenAI Error:', error)
    return "Sorry, couldn't fetch response from GenAI."
  }
}