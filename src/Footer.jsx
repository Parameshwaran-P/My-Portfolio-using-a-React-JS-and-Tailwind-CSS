import React from 'react'
import {  AiFillMail, AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
function Footer() {
  return (
    <footer className='flex-col justify-center  px-4 py-4 footer-bg-color'>
    <div className='flex justify-center pt-7 md:pl-4 gap-3  border-white w-full'>
         <a className=' pl-16' href="https://www.linkedin.com/in/parameshwaran-p"><AiOutlineLinkedin size={30}/></a>
         <p>LinkedIn</p>
         <a  href="https://github.com/Parameshwaran-P"><AiOutlineGithub size={30}/></a>
         <p>GitHub</p>
         <a href="mailto:parameshwaranit22@gmail.com?subject='Hello Parameshwaran P!'&body=''"><AiFillMail size={30}/></a>
         <p>Email</p>
         </div><br />
         <div className='flex justify-center'>
          <p className='pl-10'>&copy;parameshwaran2024</p>
          </div>
          
    </footer>
  )
}

export default Footer