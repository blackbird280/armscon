import React from 'react'
import './wordCardTheme1.css'
import { Button } from '@mui/material'
export default function WorkCard(props) {
  return (
    <div id="workCard_container" className='theme1'>
      <div>
        <img src={
            props.img_src_i
        }/>
      <Button variant='contained'id='work1'color='error'>{props.heading}</Button>
      <p>
        {props.description}
      </p>
      </div>
      
    </div>
  )
}
