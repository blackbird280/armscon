import React from 'react'
import EventsCard from './EventsCard'
import './EventsExplore.css';
import NavigationBar from './NavigationBar';
import FloatigBtn from './FloatigBtn';


import LiquorIcon from '@mui/icons-material/Liquor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import data1 from '../info/informal';
import data2 from '../info/formals';
import data3 from '../info/academic';
import data4 from '../info/art';
import data5 from '../info/special';
export default function EventsExplore() {
  return (
    <div id="events_Explore_container">
      <header>
        <h1>
          Events & Competetions
        </h1>
      </header>
      <section id="subheading_container">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.
      </section>

      <NavigationBar />
      <FloatigBtn />
      <main>
        <section id="popop">
      <EventsCard heading="informal events" icon={<LiquorIcon sx={{
        fontSize: '5rem',
        fontWeight: 'lighter'
      }} />} data={data1}/></section>
      <section id="popop">
      <EventsCard heading="formal events" icon={
        <AutoFixHighIcon sx={{ fontSize: '5rem', fontWeight: 'lighter' }} />
      } data={data2}/>
      </section>
      <section id="popop">
      <EventsCard heading="Academic events" icon={
        <LibraryBooksOutlinedIcon sx={{
          fontSize: '5rem', fontWeight: 'lighter'
        }} />
      } data={data3}/></section>
      <section id="popop">
      <EventsCard heading="Arts events" icon={
        <BrushOutlinedIcon sx={{
          fontWeight: 'lighter',
          fontSize: '5rem'
        }} />
      }data={data4} /></section>
      <section id="popop">
      <EventsCard heading="Special events" icon={
        <StarBorderIcon sx={{
          fontWeight: 'lighter',
          fontSize: '5rem'
        }} />
      } data={data5}/></section>
  </main>
    </div>
  )
}
