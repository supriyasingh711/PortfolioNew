import React from 'react'
import {motion } from 'framer-motion'
import p1 from "../assets/projects/p1.jpeg"
import p2 from "../assets/projects/p2.jpeg"

import { useSelector } from 'react-redux'
const Projects = () => {
  const [selectedItemIndex,setSelectedItemIndex]=React.useState(0)
  const {loading,portfolioData}=useSelector(state=>state.root)
const {projects}=portfolioData;
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className='my-20 text-center text- bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Projects</motion.h1>
    <div>
      {projects.map((project,index)=>(
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
         <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:0.5}}
         className='w-full lg:w-1/4'>
          
        </motion.div>
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
        className='w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold'>{project.title}</h6>
        <p className='mb-4 text-neutral-400'>{project.description}</p>
        
        {project.technologies.map((tech,index)=>(
          <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>{tech}</span>
        ))}

        </motion.div>
        <a href={project.link} className='mt-2 text-gray-300 text-underline text-0.5xl' >Source Code </a>

        </div>
      ))}

    </div>
    </div>
  )
}

export default Projects