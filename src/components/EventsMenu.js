import React from 'react'
import Culturals from './Culturals'
import Workshops from './Workshops'
import Events from './Events'
import Starnight from './Starnight'
import EventsIntro from './EventsIntro'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainPage from './MainPage';
import './EventsMenu.css'
export default function EventsMenu() {
  return (
    <div id="events_menu_container">
      
      <EventsIntro />
      <section id="events_cards_container">
      <div className='qwe'>
      <Culturals />
      </div>
      <div className='qwe'>
      <Workshops />
      </div>
      <div className='qwe'>
      <Events />
      </div>
      <div className='qwe'>
      <Starnight />
      </div>
       </section>     
            
            
            
            
          <br/>
          <br/>
    </div>
  )
}
