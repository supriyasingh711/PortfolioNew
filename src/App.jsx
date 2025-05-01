import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link, BrowserRouter} from 'react-router-dom'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SetPortfolioData } from './redux/rootSlice'
import Home from './components/Home'

const App = () => {
  const {loading,portfolioData}=useSelector(state=>state.root)
  const dispatch=useDispatch();
  const getPortfolioData=async()=>{
    try {
      const response=await axios.get("https://portfoliobackend-825r.onrender.com/api/portfolio/get-portfolio-data");
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
    </Routes>
  </BrowserRouter>

  )
}

export default App