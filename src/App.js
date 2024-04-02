import React from 'react';
import { ReactDOM } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Attendance from './Attendance';
import View_report from './View_report';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/view_report" element={<View_report />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
