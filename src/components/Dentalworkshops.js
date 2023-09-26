import React from 'react'
import HLfcard from './HLfcard'
import './denalworkshops.css';
import FloatigBtn from './FloatigBtn';
import NavigationBar from './NavigationBar';
import data_of_workshop from '../info/dental';
export default function Dentalworkshops() {
  return (
    <div id="denalworkshops_container">
      <FloatigBtn/>
      <NavigationBar/>
        <header>
            <h1>
                Denal workshops
            </h1>
        </header>
        {
            data_of_workshop.map(
                (item)=>
                <HLfcard heading={item.heading} price={item.price} what_will_you_learn={item.what_will_you_learn} venue={item.venue} time={item.time} date={item.date} variant={item.variant} themecolor={item.themecolor}/>
                )
        }
      
    </div>
  )
}
