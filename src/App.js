import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
