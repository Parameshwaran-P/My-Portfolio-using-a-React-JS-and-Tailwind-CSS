import React from 'react'
import Contactimg from './assets/Images/con-3.jpg'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai"; 
function Contact() {
  return (
    <section className=' bg-primary about-bg-color px-5 p-5' id='contact'>
    <div className='md:w-full flex justify-center px-5'>
        <h1 className='text-4xl text-white md:text-center font-bold border-b-4 mb-12 w-[200px]'>Contact Us</h1>
    </div>
    <div className=' md:flex'>
    <div className='md:w-1/2 md:flex flex-col justify-center'>
     <div className='project-bg-color md:h-[600px] md:w-[1000px] hover:border-2 border-white'>
     <div className='md:flex'>
     <div className='flex-col md:flex'>
     <div className='p-5 pl-10'>
      <h1 className='text-white '>SENT US MESSAGE</h1>
      </div>
      <div className='px-10'><input className='md:w-[300px] h-[40px] ' type="text" placeholder='Name'/></div> 
     <div className='p-10'>
     <input className='md:w-[300px] h-[40px]' type="email" placeholder='Email'/>
     </div> 
     <div className='p-10'>
      <textarea className='md:w-[300px] h-[200px]' name="" id="" cols="30" rows="10" placeholder='Message...'></textarea>
     </div>
     <div className='py-4 md:flex justify-end pl-24'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><a href=""></a>Send</button>
      </div>
     </div>
     
     <div className='p-5 text-white'>
      <h1>ADDRESS</h1>
      <div className='py-2'>
       <p>5, Radio room street,</p>
       <p>   Athani (po), Anthiyur(Tk),</p>
       <p>   Erode (Dt),- 638502,</p>
       <p>   Tamilnadu, India.</p> 
      </div>
      
      <div className='py-4'>
       <a href=""><AiOutlinePhone/></a>
       <a href="">91+ 6380767575</a>
      </div>
      <div className='py-2'>
       <a href=""><AiOutlineMail/></a>
       <a href="mailto:parameshwaranit22@gmail.com?subject='Hello Parameshwaran P!'&body=''">Click to Send an Email</a>
      </div>
      <div className='py-2'>
       <a href=""><AiOutlineLinkedin/></a>
       <a href="https://www.linkedin.com/in/parameshwaran-p" target='blank' >LinkedIn</a>
      </div>
      <div className='py-2'>
       <a href=""><AiOutlineGithub/></a>
       <a href="https://github.com/Parameshwaran-P" target='blank' >GitHub</a>
      </div>
     </div>
     </div>
      
    
     </div>
     
    </div>
    
    <div className='md:w-1/2 flex justify-center' >
    <img className='md:h-[600px] md:w-[1000px]' src={Contactimg} alt="" />
    </div>
    </div>
    
    </section>
    
  )
}

export default Contact;