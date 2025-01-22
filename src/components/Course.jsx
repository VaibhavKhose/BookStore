import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
import Navbar from './Navbar'

function Course() {
  return (
    <>
 <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
  <div className='mt-[4.2rem] items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl text-black dark:text-white '>We're delighted to have you{" "}
      <span className='text-pink-500'>Here! :)</span></h1>
      <p className='text-black dark:text-white mt-12'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, odit. Dolores nostrum ipsa eius. Asperiores optio quidem dolor vel recusandae voluptas numquam tempore sunt, magni harum ex iusto reprehenderit ipsum, temporibus libero repellat unde consectetur perferendis iure, autem vero quasi eligendi exercitationem
       </p> 
       <Link to="/">
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
       </Link>
  </div>
  <div className='mt-12  grid grid-cols-1 md:grid-cols-4'>
    {
      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
    }
  </div>
 </div>
    </>
  )
}

export default Course