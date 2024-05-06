import React from 'react'
import Resumeimg from './assets/Images/Resume1.jpg' 
function Resume() {
   function handleClick(){
    const pdfUrl = "Paramesh_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }
  return (
    <section className=' flex flex-col md:flex-row bg-primary bg-color-hero px-5 p-5' id='resume'>
    <div className='py-5 md:w-1/2 flex justify-end'>
        <img className='w-[500px] shadow-2xl shadow-black hover:border-2 border-white' src={Resumeimg} alt="resume-img" />
    </div>
    <div className='md:w-1/2 flex justify-center px-5'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl text-white font-bold border-b-4 mb-3 w-[140px] '>Resume</h1>
        <p className='pb-5 '>You can view my resume Download</p>
        <button className='bg-blue-500 hover:bg-blue-700 hover:border-2 border-white text-white font-bold py-2 px-4 rounded' onClick={handleClick}>DownloadCV</button>
        </div>
    </div>
    </section>
    
  )
}

export default Resume;