
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import UserForm from './pages/UserForm';
import ExploreFuture from './pages/ExploreFuture';
import Form from './pages/Form'
import Game from './pages/Game'
import Chat from './pages/Chat'

 
// import {askGenAi} from './utils/genai'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import EngineerQuiz from './chapters/EngineerQuiz';
import DoctorQuiz from './chapters/DoctorQuiz';
import PilotQuiz from './chapters/PilotQuiz';
import TeacherQuiz from './chapters/TeacherQuiz';
import NavyQuiz from './chapters/NavyQuiz';
import LawyerQuiz from './chapters/LawyerQuiz';




import './App.css'
import './index.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/UserForm" element={<UserForm />} />
        <Route path="/explore-future" element={<ExploreFuture />} />
        <Route path="/engineer-quiz" element={<EngineerQuiz />} />
        <Route path="/doctor-quiz" element={<DoctorQuiz />} />
        <Route path="/pilot-quiz" element={<PilotQuiz />} />
        <Route path="/teacher-quiz" element={<TeacherQuiz />} />
        <Route path="/navy-quiz" element={<NavyQuiz />} />
        <Route path="/lawyer-quiz" element={<LawyerQuiz />} />
  {/* <Route path="/onboarding" element={<Onboarding />} /> */}
        
      </Routes>   
      </BrowserRouter>
    
  )
}

export default App
