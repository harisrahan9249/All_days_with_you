import { Routes,Route } from 'react-router-dom'
import Register from './component/Register'
import Home from './pages/Home'
import Signup from './component/Singnup'

export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path='/home'  element={<Home/>}/>
      </Routes>
    
  )
}
