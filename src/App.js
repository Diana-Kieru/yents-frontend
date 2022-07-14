import React from 'react';
// import { LandingPage, LogIn, SignUp, DashBoard } from './pages';
import  LandingPage  from './pages/LandingPage';
import  LogIn  from './pages/LogIn'
import  SignUp  from './pages/SignUp'
import  DashBoard from './pages/DashBoard'

import { Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route exact path="login" element={<LogIn />}/>
        <Route exact path="signup" element={<SignUp/>}/>
        <Route exact path="DashBoard" element={<DashBoard />}/>
    </Routes>
  );
}

export default App;
