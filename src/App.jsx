import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link, BrowserRouter} from 'react-router-dom'
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
import Admin from './pages/admin/Index'
import Home from './components/Home'







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
    if(!portfolioData){
      getPortfolioData();
    }
  },[portfolioData])
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/> 
    </Routes>
  </BrowserRouter>
  
  
    
  

  )
}

export default App