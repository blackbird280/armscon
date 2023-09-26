import React from 'react'
import './NW.css'
import HLfcard from './HLfcard';
import data_of_workshop from '../info/nursing';
import FloatigBtn from './FloatigBtn';
import NavigationBar from './NavigationBar';
export default function NursingWorkshop() {
  return (
    <div id='nursing_workshop_container'>
      <FloatigBtn/>
      <NavigationBar/>
      <header>
        <h1>
            Nursing workshops
        </h1>
      </header>
      <section>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.
        </p>
      </section>
      <section>
        {
            data_of_workshop.map(
                (item)=>
                <HLfcard heading={item.heading} variant={item.variant} themecolor={item.themecolor} what_will_you_learn={item.what_will_you_learn} price={item.price} date={item.date} time={item.time} venue={item.venue} />
            )
        }
      </section>
    </div>
  )
}
