import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import {Navbar}  from './components/Navbar'
import Header from './components/Header'
import Matches from './components/matches';
import About from './components/About';

function App() {

  return (
    <>
    <Router>
        <Header/>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Matches/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
