import React, { useState } from 'react'
// import Icon from '../assets/Images/paramesh.ico'
import { Bars3Icon } from '@heroicons/react/24/solid'



function Header() {

  const [toggle, setToggle] = useState(false)
  return (
   
    <header className="flex justify-between px-6 py-4 bg-color">
       {/* <img className='rounded-full' src={Icon} alt="" />  */}
        <a className='text-white font-bold' href="#">PARAMESHWARAN P</a>
        <nav className='hidden md:block'>
        <ul className='flex text-white '>
            <li><a href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">What I am do?</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
        </nav>
       { toggle && <nav className='block md:hidden '>
        <ul className='flex flex-col text-white mobile-nav'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">What I am do?</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
        </nav>}
        <button onClick={()=>{setToggle(!toggle)}} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
    
  )
}

export default Header