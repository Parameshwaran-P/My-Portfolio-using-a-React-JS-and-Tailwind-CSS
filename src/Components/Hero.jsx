import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import myImg from '../assets/Images/paramesh.png'
import MERN from '../assets/Images/pic-3-transparent.png'
import {  AiFillTwitterCircle, AiOutlineBlock, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
function Hero() {
  return (
    <section className='flex px-10 py-28 bg-color-hero justify-center h-fit'>
        <img className='h-32 w-40 rounded-full  ' src={myImg} alt="myImg" />
        <div className='w-1/2 text-4xl flex-col'>
        <h1 className=' text-white  pl-10 pt-10 font-hero'>
        <TypeAnimation className='' sequence={[` Hi, I'm PARAMESHWARAN P,`,1000,
        `Welcome to my website!`,1000,
        `I'm a MERN Full-stack Developer.`,1000,
          "",]}
          speed={50}
          repeat={Infinity}
         /></h1>
         <div className='flex pt-7 pl-10 gap-3 border-white'>
         <AiOutlineLinkedin/>
         <AiOutlineGithub/>
         <FaXTwitter/>
         <FaYoutube/>

         </div>
        </div>
        
         <img className='w-1/2 pl-5' src={MERN} alt="" />

    </section>
  )
}

export default Hero