import React, { useEffect, useState } from 'react'
import Icon from '../assets/Icons/paramesh.ico'
import { Bars3Icon } from '@heroicons/react/24/solid'



function Header() {

  const [toggle, setToggle] = useState(false)
  const [show, setShow] = useState(false)
  const Scroll =()=>{
   
    if(window.scrollY>20){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', Scroll)
    return()=>{
      window.removeEventListener('scroll', Scroll)
    }
  }, []);
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
            <li><a href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">What I am do?</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
        </nav>
       { toggle && <nav className='block md:hidden'>
        
        <ul className='flex flex-col text-white  mobile-nav'>
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