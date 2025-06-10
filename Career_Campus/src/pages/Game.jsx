import React from "react";
import Splash from "./splash";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserForm from './UserForm';
import ExploreFuture from "./ExploreFuture";
import EngineerQuiz from "../chapters/EngineerQuiz";  
import DoctorQuiz from "../chapters/DoctorQuiz";

import PilotQuiz from "../chapters/PilotQuiz";
import TeacherQuiz from "../chapters/TeacherQuiz";
import NavyQuiz from "../chapters/NavyQuiz";
import LawyerQuiz from "../chapters/LawyerQuiz";
export default function Game() {
    return (
        <BrowserRouter>
      <Routes>
     
            <Route path="/" element={<Splash />} />
        <Route path="/form" element={<UserForm />} />
         <Route path="/explore-future" element={<ExploreFuture />} />
          <Route path="/engineer-quiz" element={<EngineerQuiz />} />
          <Route path="/doctor-quiz" element={<DoctorQuiz />} />
          <Route path="/pilot-quiz" element={<PilotQuiz />} />
          <Route path="/teacher-quiz" element={<TeacherQuiz />} />
          <Route path="/navy-quiz" element={<NavyQuiz />} />
          <Route path="/lawyer-quiz" element={<LawyerQuiz />} />
          </Routes>
          </BrowserRouter>
         
    )
}