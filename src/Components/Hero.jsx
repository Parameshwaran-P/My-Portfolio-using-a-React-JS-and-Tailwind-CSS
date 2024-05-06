import React from 'react'
import {TypeAnimation} from 'react-type-animation'
// import myImg from '../assets/Images/paramesh.png'
import MERN from '../assets/Images/webdev.jpg'
import {  AiFillMail, AiFillTwitterCircle, AiOutlineBlock, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

function Hero() {
  const config ={
    name: 'PARAMESHWARAN P',
    specialization: 'MERN Full-stack Developer'
  }
  return (
    <section className='flex flex-col md:flex-row px-10 py-28 bg-color-hero justify-center h-full'id='home'>
        {/* <img className='h-40  w-40 rounded-full hero-img ' src={myImg} alt="myImg" /> */}
        <div className='md:w-1/2  md:text-5xl flex-col'>
          <div className='py-0'>
          
          </div>
        <div className=''>
          
        <h1 className=' text-primary  pl-10 md:pl-20 mt-10 justify-center md:pt-32 font-hero'>
        <TypeAnimation className='' sequence={[` Hi, I'm ${config.name},`,1000,
        
        `I'm a ${config.specialization}.`,1000,
          "",]}
          speed={50}
          repeat={Infinity}
         /></h1>
        
        </div>
       
         <div className='flex pt-7 md:pl-4 gap-3 border-white'>
         <a className='hover:text-white pl-16' href="https://www.linkedin.com/in/parameshwaran-p"><AiOutlineLinkedin size={30}/></a>
         <a className='hover:text-white  ' href="https://github.com/Parameshwaran-P"><AiOutlineGithub size={30}/></a>
         <a className='hover:text-white ' href="mailto:parameshwaranit22@gmail.com?subject='Hello Parameshwaran P!'&body=''"><AiFillMail size={30}/></a>
         <a className='hover:text-white ' href=""><FaYoutube size={30}/></a>
         </div>
        </div>
        <div className='md:w-1/2 px-0  '>
        <img className='pt-5 md:pl-5  ' src={MERN}  alt="" />
        </div>
        

    </section>
  )
}

export default Hero