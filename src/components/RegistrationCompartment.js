import React from 'react'
import './RegistrationCompartment.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Wavy from './Wavy'
import img from '../assets/img.jpg'
export default function RegistrationCompartment() {
  const navigate=useNavigate()
  return (
    <div id="register_compartment"className="zigzag-border">
        <h1 >We'd be waiting at ARMSCON</h1>
      
          <h2>from  <mark> 12/12/12 </mark> to <mark>15/12/12</mark></h2>
        
        <div>
        <Button variant='contained'color='secondary'onClick={()=>navigate('/registrationform')}>Register for Armscon</Button>
        </div>
        
    </div>
  )
}
