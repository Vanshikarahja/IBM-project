
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Form from './pages/Form'
import Game from './pages/Game'
import Chat from './pages/Chat'

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'




import './App.css'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Chat" element={<Chat />} />
       
        
      </Routes>   
      </BrowserRouter>


    
  )
}

export default App
