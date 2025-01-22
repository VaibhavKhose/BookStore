import React from 'react'
import Home from './Home/Home.jsx'
import { Route,Routes,useNavigate } from "react-router-dom"
import Courses from ".././src/courses/Courses.jsx"
import Signup from './components/Signup.jsx'



const App = () => {
  const navigate=useNavigate();
  return (
    <>
  <div className='dark:bg-slate-900 dark: text-white '>
  <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/course' element= {<Courses/>} />
    <Route path='/signup' element= {<Signup/>} />
   </Routes>
  </div>

    </>
  )
}

export default App
