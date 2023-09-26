import React from 'react'
import './FullDayWorkshop.css';
import data_of_workshop from '../info/fullday';
import HLfcard from './HLfcard';
import FloatigBtn from './FloatigBtn';
import NavigationBar from './NavigationBar';
export default function FullDayWorkshop() {
  return (
    <div id="fullday_Workshop_container">
      <FloatigBtn/>
      <NavigationBar/>
      <header>
        <h1>Full day workshops</h1>
      </header>
      <section>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.
        </p>
      </section>
      <article>
        {
            data_of_workshop.map(
                (item)=><HLfcard heading={item.heading} variant={item.variant} price={item.price}
                themecolor={item.themecolor} what_will_you_learn={item.what_will_you_learn}
                date={item.date} time={item.time} venue={item.venue}/>
            )
        }
      </article>
    </div>
  )
}
