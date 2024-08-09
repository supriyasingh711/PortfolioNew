import React from 'react'
import {motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const Contact = () => {

const {loading,portfolioData}=useSelector(state=>state.root)
const {contact}=portfolioData;
const {greetText,address,emailId,phoneNumber}=contact
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>{greetText}</motion.h1>
        <div className='text-center tracking-tighter'>

            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='my-4'>{address}</motion.p>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='my-4'>{phoneNumber}</motion.p>
            <motion.a 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            href="singhsupriya90033@gmail.com">{emailId}</motion.a>
            
        </div>
        </div>
  )
}

export default Contact