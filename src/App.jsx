import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SetPortfolioData } from './redux/rootSlice'







const App = () => {
  const {loading,portfolioData}=useSelector(state=>state.root)
  const dispatch=useDispatch();
  const getPortfolioData=async()=>{
    try {
      const response=await axios.get("http://localhost:3000/api/portfolio/get-portfolio-data");
      // console.log(response.data)
      dispatch(SetPortfolioData(response.data))
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
  getPortfolioData();
  },[])
  // useEffect(()=>{
  //   console.log(portfolioData)
  // },[portfolioData])
  
  return (
    <div className='overflow-x-hidden text-white text-black-300 antialised slec selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>

      </div>
      <div className='container mx-auto px-8'>
        {/* {showLoading? <Loader/>:null} */}
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experiences/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App