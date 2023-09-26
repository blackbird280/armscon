import React from 'react'
import './CE.css';

import CircleCards from './CircleCards';
import data from '../info/culturals';
import NavigationBar from './NavigationBar';
import { toggleCollapse } from './NavigationBar';
import FloatigBtn from './FloatigBtn';
export default function CulturalExplore() {
  
  return (
    <div id="CE_container">
      <header>
        <h1>
          Culturals
        </h1>
      </header>
      <NavigationBar/>
      {
        data.map(
          (data)=>
          <div className="circle_Cards_container_datasets">
          <CircleCards heading={data.heading} img_url={data.img} info={data.info}
                  description={data.description} 
          />
          </div>
        )
      }
      
      <FloatigBtn/>
    </div>
  )
}
