import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link  } from "react-router-dom"
import MainPage from './components/MainPage'
import CulturalExplore from './components/CulturalExplore'
import WorkshopExplore from './components/WorkshopExplore'
import Footer from './components/Footer'
import Halfdayworkshops from './components/Halfdayworkshops'
import FullDayWorkshop from './components/FullDayWorkshop'
import NursingWorkshop from './components/NursingWorkshop'
import RegistrationForm from './components/RegistrationForm'
import TestimonialPage from './components/TestimonialPage'
import EventsExplore from './components/EventsExplore'
import { useLayoutEffect } from 'react'
import Dentalworkshops from './components/Dentalworkshops'
import Physio from './components/Physio'
import Gallery from './components/Gallery'
import StarnightA from './components/StarnightA'
import Testing from './components/Testing'
import Mainpage2 from './info/Mainpage2'
import CoolWorkshopContainer from './components/CoolWorkshopContainer'
import Template from './components/Template'
import CultureTemplate from './components/CultureTemplate'
import FloatigBtn from './components/FloatigBtn'
import NavigationBar from './components/NavigationBar'



export default function App() {
  return (
    <div >
      <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Mainpage2/>}/>
            <Route path='/culturals' element={<CultureTemplate/>}/>
            <Route path='/workshops' element={<Template/>}/>
            
            
     
           
           <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/test' element={<Testing/>}/>
            
        </Routes>
      </BrowserRouter> 
      
      <Footer/>
    </div>
  )
}
