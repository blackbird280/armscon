import React from 'react'
import './DisplayCard.css'
import { Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
export default function DisplayCard(props) {
  return (
    <div id="display_card_container">
      <main style={{
        boxShadow:`0px 0px 10px ${props.colori}`
      }}>
        <div>
        <StarIcon/>
        </div>
        <div>
        <h1>
            {props.heading}
        </h1>

        </div>
        <div>
        <StarIcon/>
        </div>
        <div>
        <Button variant='outlined' color='warning'>explore</Button>

        </div>
        
        
      </main>
    </div>
  )
}
