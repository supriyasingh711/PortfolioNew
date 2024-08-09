import React from 'react'
import {TbBrandNextjs} from 'react-icons/tb';
import {SiMongodb} from 'react-icons/si';
import {DiRedis} from 'react-icons/di';
import {FaNodeJs} from 'react-icons/fa';
import {BiLogoPostgresql} from 'react-icons/bi';
import {RiReactjsLine} from 'react-icons/ri';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import {motion } from 'framer-motion'

const iconVariants=(duration)=>({


  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
<TbBrandNextjs className='text-7xl '/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<SiMongodb className='text-7xl text-green-400'/>
            </motion.div> 
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl  border-4 border-neutral-800 p-4'>

<RiTailwindCssFill className='text-7xl text-teal-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
              className='rounded-2xl  border-4 border-neutral-800 p-4'>
<FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<DiMysql className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<TbBrandCpp className='text-7xl text-sky-200'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<FaJava className='text-7xl text-sky-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<FaSass className='text-7xl text-pink-500'/>
            </motion.div><motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl  border-4 border-neutral-800 p-4'>
<FiGithub className='text-7xl text-white'/>
            </motion.div>

            
        </motion.div>
    </div>
  )
}

export default Technologies