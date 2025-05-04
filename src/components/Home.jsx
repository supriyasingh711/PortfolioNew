
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Technologies from './Technologies'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import { useSelector } from 'react-redux'
import UniqueFeatures from './UniqueFeatures'

const Home = () => {
  const {loading,portfolioData}=useSelector(state=>state.root)

  return (
    <div className='overflow-x-hidden text-white text-black-300 antialised slec selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      
      {portfolioData && (
        <div className='container mx-auto px-8'>
        
        <Hero/>
        <Navbar/>

        {/* <About/> */}
        <Technologies/>

        <Projects/>
        <UniqueFeatures/>
        <Contact/>
        </div>

      )}

      </div>
  )
}

export default Home