import React from 'react'
import profilePic from '../assets/supriyaSingh.jpeg'
import { ABOUT_TEXT } from '../constants'
import {motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const About = () => {
  const {loading,portfolioData}=useSelector(state=>state.root)
  const {about}=portfolioData;
  const {aboutImgURL,description}=about
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                {/* <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={profilePic} alt="Supriya Singh" />
                </div> */}
                
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className="my-2 max-w-xl py-6">{description}</p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default About