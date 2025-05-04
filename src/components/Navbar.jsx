import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaCode} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-center py-6'>
        <div className='flex flex-shrink-0 items-center'>
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl'>
           <a href='https://www.linkedin.com/in/supriya-singh-741835237'><FaLinkedin /></a> 
           <a href='https://github.com/supriyasingh711'><FaGithub/></a> 
           <a href='https://leetcode.com/u/singhsupriya711/'><FaCode/></a> 
        </div>
    </nav>
  )
}

export default Navbar