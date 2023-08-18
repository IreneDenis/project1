/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Customdiv from './components/Customdiv'
import Login from './components/Login'
import Detailpage from './components/Detailpage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/Customdiv" element={<Customdiv/>}/>
        <Route path="/Detailpage/:id" element={<Detailpage/>}/>
      </Routes>
    </div>
  )
}

export default App