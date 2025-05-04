import React from 'react'
import {motion } from 'framer-motion'
import profilePic from '../assets/me2.png'
import { useSelector } from 'react-redux'


const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  }
})

const Hero = () => {
  const {loading,portfolioData}=useSelector(state=>state.root)
  const {intro}=portfolioData;
  const {firstName,lastName,greetingText,description,position}=intro
  return (
    <div className='border-b border-neutral-900 w-full border-white p-10 lg:mb-35 bg-img'>
        <div className='flex flex-wrap justify-center  items-center'>
            <div className='w-full lg:w-full'>
            <div className='flex flex-col items-center justify-center '>
            
            <motion.span
                variants={container(0.2)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>{greetingText || ""}</motion.span>
                <div className=' lg:w-1/3 p-8 rounded-full '>
            <div className='flex item-center justify-center'>
                <motion.img className='rounded-full w-32 h-62 '
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1}}
                src={profilePic} alt={firstName || ""} />
                </div>
                
                </div>
                {/* <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-thin tacking-tight lg:mt-16 lg:text-8xl'>{firstName || ""} {lastName || ""}</motion.h1> */}
                <motion.span
                variants={container(0.2)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>{position}</motion.span>
             {(description || "")
  .split('\n\n')
  .map((para, idx) => (
    <motion.p
      key={idx}
      variants={container(0.3 + idx * 0.1)}
      initial="hidden"
      animate="visible"
      className='my-2 max-w-xl py-2 font-light tracking-tighter'
    >
      {para}
    </motion.p>
))}
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero