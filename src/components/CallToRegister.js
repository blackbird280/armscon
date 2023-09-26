import { Button } from '@mui/material'
import React from 'react'
import './CallToRegister.css'
import Redirect from './Redirect'
export default function CallTo() {
  return (
    <div id="callto_container">
      <h1>
        So what are you waiting for?
      </h1>
      <h2>
        Registrations starting at <br/>
        Rs 499 Only
      </h2>
      <div id="rgt_btn_container">
        <Button variant='contained'color='error'sx={{
          width:'60%'
        }} onClick={Redirect}>
            Register Now
        </Button>
      </div>
    </div>
  )
}
