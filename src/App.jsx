import React from 'react'
import Home from './Home/Home.jsx'
import { Route,Routes } from "react-router-dom"
import Course from './components/Course.jsx'


const App = () => {
  return (
    <>
   <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/course' element= {<Course/>} />
   </Routes>
    //1:27 - 20jan
    </>
  )
}

export default App
