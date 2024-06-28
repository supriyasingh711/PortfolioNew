import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaCode} from "react-icons/fa";
import {PiCloverFill} from "react-icons/pi";
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a className='flex text-3xl ' href="">S's</a>
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaCode/>
        </div>
    </nav>
  )
}

export default Navbar