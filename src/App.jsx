import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';
import Home from './pages/home';
import Header from './components/header';


function App() {

  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
