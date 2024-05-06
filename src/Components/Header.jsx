import React, { useEffect, useState } from 'react'
import Icon from '../assets/Icons/paramesh.ico'
import { Bars3Icon } from '@heroicons/react/24/solid'



function Header() {

  const [toggle, setToggle] = useState(false)

  return (
   
    <header className="flex justify-between px-6 py-4 bg-color">
       <div >
<img className='rounded-full' src={Icon} alt="" /> 
       </div>
       <div className='absolute px-12'>
       <a className='text-white font-bold' href="#">PARAMESHWARAN P</a>
       </div>
        
        <nav className='hidden md:block'>
        <ul className='flex text-white '>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#what-i-do">What I am do?</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
        </nav>
       { toggle && <nav className='block md:hidden'>
        
        <ul onClick={()=>{setToggle(!toggle)}} className='flex flex-col text-white  mobile-nav'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#what-i-do">What I am do?</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
        
        
        </nav>}
        <button onClick={()=>{setToggle(!toggle)}} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
    
  )
}

export default Header