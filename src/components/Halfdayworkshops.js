import React from 'react'
import './hlfday.css'
import HLfcard from './HLfcard';
import data_of_workshop from '../info/halfday';
import FloatigBtn from './FloatigBtn';
import NavigationBar from './NavigationBar';
export default function Halfdayworkshops() {
  return (
    <div id="halfday_workshop_container">
      <FloatigBtn/>
      <NavigationBar/>
      <header>
        <h1>Half day workshops</h1>
      </header> 
      <section id="extra_container">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor
        </p>
      </section>
      <main>
        {
          data_of_workshop.map(
            (items)=>
              <HLfcard heading={items.heading} price={items.price} themecolor="rgb(170, 0, 255)" variant={items.variant} what_will_you_learn={items.what_will_you_learn}
              date={items.date} time={items.time} venue={items.venue} />
            
          )
        }
      </main>
    </div>
  )
}
