import React from 'react'
import Aboutimg from '../assets/Images/About.png' 
function About() {
  return (
    <section className=' flex flex-col md:flex-row bg-primary about-bg-color px-5 p-5'>
    <div className='py-5 md:w-1/2'>
        <img className='hover:shadow-xl shadow-black' src={Aboutimg} alt="about-img" />
    </div>
    <div className='md:w-1/2 flex justify-center px-5'>
        <div className='flex flex-col justify-center text-xl text-white'>
        <h1 className='text-4xl text-white font-bold border-b-4 mb-3 w-[180px] '>About me</h1>
        <p className='pb-5 '>Hi, my name is Parameshwaran P . I am a MERN Full stack developer.I built beautiful websites with React.js and Tailwind CSS.</p>
        <p className='pb-5'>I am proficiant in Frontend skills like ReactJS, Redux, Redux Tool Kit, Axious, Tailwind CSS, Bootstrap, CSS3 and many more.</p>
        <p className=''>In backend I know NodeJS, ExpressJS, MongoDB.</p>
        </div>
        
    </div>
    </section>
    
  )
}

export default About