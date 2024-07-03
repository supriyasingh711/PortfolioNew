import React from 'react'
import {motion } from 'framer-motion'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/myPic.jpeg'
import { TbCoinTaka } from 'react-icons/tb'



const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pb-16 text-6xl font-thin tacking-tight lg:mt-16 lg:text-8xl'>Supriya Singh</motion.h1>
                <motion.span
                variants={container(0.2)}
                initial="hidden"
                animate="visible"
                className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Full Stack Developer</motion.span>
                <motion.p 
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
            </div>
            </div>
            <div className=' lg:w-1/3 lg:p-8 rounded-full '>
            <div className='flex item-center justify-center'>
                <motion.img className='  triangle-img filter grayscale'
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1}}
                src={profilePic} alt="Supriya Singh" />
                </div></div>
        </div>
    </div>
  )
}

export default Hero