import React from 'react'
import './WorkshopsExplore.css'
import WorkCard from './workCard'
import first_categories from '../info/workshops'
import NavigationBar from './NavigationBar'
import FloatigBtn from './FloatigBtn'
import Categorycard from './Categorycard'
export default function WorkshopExplore() {
  return (
    <div id="workshopExplore_container">
      <NavigationBar/>
      <FloatigBtn/>
      <header>
        <h1>
          Workshops Categories
        </h1>
      </header>
      <main>
        
      <Categorycard title="Half day workshops" number_of_workshops={5} themecolor="rgb(170, 0, 255)" color_btn="secondary" path='/workshops/halfdayworkshop'/>
      <Categorycard title="Full day workshops" number_of_workshops={9} themecolor="rgb(16,124,233)" color_btn="primary"path="/workshops/fulldayworkshop"/>

      <Categorycard title="Nursing workshops" number_of_workshops={1} themecolor="rgb(210,10,10)" color_btn="error"path="/workshops/nursingworkshop"/>

      <Categorycard title="Dental workshops" number_of_workshops={1} themecolor="rgb(10,160,10)" color_btn="success"path='/workshops/dentalworkshop'/>


      <Categorycard title="physiotherapy workshops" number_of_workshops={1} themecolor="rgb(255,128,10)" color_btn="warning"path="/workshops/physiotherapyworkshop"/>
      </main>
    </div>
  )
}
