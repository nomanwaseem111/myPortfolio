import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
const App = () => {
  return (
    <div>
      
      <Router>
      <div>
        <Navbar/>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} /> */}

        </Routes>
      </div>
    </Router>
      <Footer/>
    </div>
  )
}

export default App
