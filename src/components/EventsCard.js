import React from 'react'
import { Button } from '@mui/material';
import './EventsCard.css'


export default function EventsCard(props) {
  let data=props.data;
  
  return (
    <div id="events_card_container">
      <fieldset>
        <legend>
            {props.icon}  
        </legend>
        <h1>
            {props.heading}
        </h1>

        <section>
          
        {
          data.map(
            (item)=>
            <a href={item.link}>
              <h2><Button variant='outlined'color='secondary' >{item.heading} </Button></h2>
            </a>
          )
        }
        </section>
       
      </fieldset>
    </div>
  )
}
