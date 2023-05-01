import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Register from '../component/Register'
import Home from '../pages/Home'

function Routes() {
  return (
    
    <Routes>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/home'  element={<Home/>}/>
    </Routes>
    
      
    
  )
}

export default Routes
