import React from 'react'
import Mern from './assets/Images/mern.png'
import Front from './assets/Images/frontend.png'
import Back from './assets/Images/backend.png'
import Database from './assets/Images/database.png'
import Problem from './assets/Images/problem.png'
import Learn from './assets/Images/learn.jpg'
function WhatIdo() {
  return (
    <section className=' md:flex flex-col bg-color-hero w-full py-8' id='what-i-do'>
        <div className='flex md:flex justify-center pt-4 w-full'>
            <h1 className='text-4xl text-white md:text-center font-bold border-b-4 mb-12 w-[200px]'>What I DO?</h1>
        </div>
       {/* this for medium device */}

       <div className='hidden md:block'>
       <div className='flex flex-col md:flex-row '>
        <div className='md:w-1/2 flex-col px-10 md:flex'>
        <div className=' md:flex '>
        <img className=' rounded-full p-8' src={Mern} alt="" />  
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center p-4 border-b-2 pb-2'>MERN Stack Proficiency</h1>
         <p className='text-white text-center pt-2'>I am proficient in utilizing the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, to develop full-stack web applications. With a strong foundation in each of these technologies, I can seamlessly integrate front-end and back-end functionalities to create robust applications.</p>
        </div>     
        </div> 
        </div>    
        <div className='md:w-1/2  md:flex '>
        <div className='md:flex px-10'>
          
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center  p-4 border-b-2 pb-2'>Database Management</h1>
         <p className='text-white text-center pt-2'>With MongoDB as my preferred NoSQL database, I adeptly design database schemas and perform CRUD operations to manage data efficiently. I understand the importance of data integrity and scalability, implementing robust solutions to meet the requirements of modern web applications.</p>
        </div> 
        <img className='rounded-full  p-8' src={Database} alt="" />
        </div>
        </div>
        
        </div>
       </div>
       
      {/* this for mobile phone view */}
        <div className='block md:hidden'>
        <div className='flex flex-col md:flex-row '>
        <div className='md:w-1/2 flex-col px-10 md:flex'>
        <div className=' md:flex '>
        <img className=' rounded-full p-8' src={Mern} alt="" />  
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center p-4 border-b-2 pb-2'>MERN Stack Proficiency</h1>
         <p className='text-white text-center pt-2'>I am proficient in utilizing the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, to develop full-stack web applications. With a strong foundation in each of these technologies, I can seamlessly integrate front-end and back-end functionalities to create robust applications.</p>
        </div>     
        </div> 
        </div>    
        <div className='md:w-1/2  md:flex '>
        <div className='md:flex px-10'>
        <img className='rounded-full  p-8' src={Database} alt="" />
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center  p-4 border-b-2 pb-2'>Database Management</h1>
         <p className='text-white text-center pt-2'>With MongoDB as my preferred NoSQL database, I adeptly design database schemas and perform CRUD operations to manage data efficiently. I understand the importance of data integrity and scalability, implementing robust solutions to meet the requirements of modern web applications.</p>
        </div> 
        
        </div>
        </div>
        
        </div>
        </div>
{/* this for medium device */}
         <div className='hidden md:block'>
         <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 px-10 md:flex'>
        <div className='md:flex md:pt-10'>
        <img className='rounded-full   p-8' src={Front} alt="" />  
        <div className='md:px-5 md:pt-5 p-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center p-4 border-b-2 pb-2'>Front-End Development</h1>
         <p className='text-white text-center pt-2'>I excel in front-end development using React.js, a powerful JavaScript library for building user interfaces. I leverage React’s component-based architecture to create interactive and responsive UIs that enhance user experience and engagement.</p>
        </div>     
        </div> 
        </div>    
        <div className='md:w-1/2 md:pt-10  md:flex '>
        <div className='md:flex px-10'>
          
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl p-4 text-center border-b-2 pb-2'>Problem-Solving and Collaboration:</h1>
         <p className='text-white text-center pt-2'>As a newcomer to the industry, I bring a fresh perspective and a strong willingness to learn. I thrive in collaborative environments, where I can actively participate in brainstorming sessions, offer creative solutions, and contribute to the success of the team.</p>
        </div> 
        <img className='rounded-full  p-8' src={Problem} alt="" />
        </div>
         
        </div>
        </div>
         </div>
        {/* this for mobile view */}
        <div className='block md:hidden'>
         <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 px-10 md:flex'>
        <div className='md:flex md:pt-10'>
        <img className='rounded-full   p-8' src={Front} alt="" />  
        <div className='md:px-5 md:pt-5 p-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center p-4 border-b-2 pb-2'>Front-End Development</h1>
         <p className='text-white text-center pt-2'>I excel in front-end development using React.js, a powerful JavaScript library for building user interfaces. I leverage React’s component-based architecture to create interactive and responsive UIs that enhance user experience and engagement.</p>
        </div>     
        </div> 
        </div>    
        <div className='md:w-1/2 md:pt-10  md:flex '>
        <div className='md:flex px-10'>
        <img className='rounded-full  p-8' src={Problem} alt="" />
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl p-4 text-center border-b-2 pb-2'>Problem-Solving and Collaboration:</h1>
         <p className='text-white text-center pt-2'>As a newcomer to the industry, I bring a fresh perspective and a strong willingness to learn. I thrive in collaborative environments, where I can actively participate in brainstorming sessions, offer creative solutions, and contribute to the success of the team.</p>
        </div> 
       
        </div>
         
        </div>
        </div>
         </div>

        {/* this for medium-device */}

        <div className='hidden md:block'>
        <div className='md:flex md:pt-10'>
        <div className='md:w-1/2 px-10 flex '>
        <div className='md:flex '>
        <img className='rounded-full p-8' src={Back} alt="" />  
        <div className='md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center p-4 border-b-2 pb-2'>Back-End Development</h1>
         <p className='text-white text-center pt-2'>On the back-end, I harness the capabilities of Node.js and Express.js to build scalable and efficient server-side applications. Whether it’s handling user authentication, managing data, or implementing RESTful APIs, I ensure seamless communication between the client and server for optimal performance.
</p>
        </div>     
        </div> 
        </div>    
        <div className='md:w-1/2  md:flex '>
        <div className='md:flex px-10'>
         
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl p-4 text-center border-b-2 pb-2'>Continuous Learning</h1>
         <p className='text-white text-center pt-2'>I am committed to staying updated with the latest trends and technologies in web development. Through self-study, online courses, and hands-on projects, I continuously expand my skill set and strive for excellence in my work.</p>
        </div> 
        <img className='rounded-full  p-8' src={Learn} alt="" /> 
        </div>
         
        </div>
        </div>
        </div>
        {/* this for mobile view */}
        <div className='block md:hidden'>
        <div className='md:flex md:pt-10'>
        <div className='md:w-1/2 px-10 flex '>
        <div className='md:flex '>
        <img className='rounded-full p-8' src={Back} alt="" />  
        <div className='md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl text-center p-4 border-b-2 pb-2'>Back-End Development</h1>
         <p className='text-white text-center pt-2'>On the back-end, I harness the capabilities of Node.js and Express.js to build scalable and efficient server-side applications. Whether it’s handling user authentication, managing data, or implementing RESTful APIs, I ensure seamless communication between the client and server for optimal performance.
</p>
        </div>     
        </div> 
        </div>    
        <div className='md:w-1/2  md:flex '>
        <div className='md:flex px-10'>
        <img className='rounded-full  p-8' src={Learn} alt="" />
        <div className='justify-center md:px-5 md:pt-5 shadow-2xl shadow-black hover:border-2 border-white about-bg-color'>
         <h1 className='text-white text-2xl p-4 text-center border-b-2 pb-2'>Continuous Learning</h1>
         <p className='text-white text-center pt-2'>I am committed to staying updated with the latest trends and technologies in web development. Through self-study, online courses, and hands-on projects, I continuously expand my skill set and strive for excellence in my work.</p>
        </div> 
         
        </div>
         
        </div>
        </div>
        </div>
    </section>
   
  )
}

export default WhatIdo