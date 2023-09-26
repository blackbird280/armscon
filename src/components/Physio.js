import React from 'react'
import data_of_workshop from '../info/physiotherapy'
import HLfcard from './HLfcard'
import FloatigBtn from './FloatigBtn';
import NavigationBar from './NavigationBar';
import './physio.css'
export default function Physio() {
  return (
    <div id="physiotherapy_container">
      <FloatigBtn/>
      <NavigationBar/>
      <header>
        <h1>Physiotherapy Workshops</h1>
      </header>
        {
            data_of_workshop.map(
                (item)=><HLfcard variant={item.variant} price={item.price} heading={item.heading} themecolor={item.themecolor} date={item.date} time={item.time} venue={item.venue} what_will_you_learn={item.what_will_you_learn} />
            )
        }
    </div>
  )
}
