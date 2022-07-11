import React from 'react';
// import { LandingPage, LogIn, SignUp, DashBoard } from './pages';
import  LandingPage  from './pages/LandingPage';
import  LogIn  from './pages/LogIn'
import  SignUp  from './pages/SignUp'
import  DashBoard from './pages/DashBoard'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<LogIn />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/DashBoard" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
