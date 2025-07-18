import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

const Routing = () => {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <Header/>
     <main className="flex-grow-1">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile/:username" element={<Profile/>} />
            
        </Routes>
        </main>
        <Footer/>
        </div>
      
    </>
  )
}

export default Routing
