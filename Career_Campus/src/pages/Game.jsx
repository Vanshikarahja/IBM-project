import React from "react";
//import splash from "./splash.png";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserForm from "./UserForm";
import Splash from "./splash";
import ExploreFuture from "./ExploreFuture";
import EngineerQuiz from "../chapters/EngineerQuiz";  
import DoctorQuiz from "../chapters/DoctorQuiz";

import PilotQuiz from "../chapters/PilotQuiz";
import TeacherQuiz from "../chapters/TeacherQuiz";
import NavyQuiz from "../chapters/NavyQuiz";
import LawyerQuiz from "../chapters/LawyerQuiz";
export default function Game() {
    return(
        // <BrowserRouter>
        <Routes>
            <Route path="/" element={<Splash/>} />

            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/explore" element={<ExploreFuture />} />
            <Route path="/engineer" element={<EngineerQuiz />} />
            <Route path="/doctor" element={<DoctorQuiz />} />
            <Route path="/pilot" element={<PilotQuiz />} />
            <Route path="/teacher" element={<TeacherQuiz />} />
            <Route path="/navy" element={<NavyQuiz />} />
            <Route path="/lawyer" element={<LawyerQuiz />} />
        </Routes>

        // {/* </BrowserRouter> */}
    )
};


