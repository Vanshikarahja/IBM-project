
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import SignIn frrom './pages/SignIn'
import Form from './pages/Form'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-500">hello guys</h1>
    </div>
    
  )
}

export default App
