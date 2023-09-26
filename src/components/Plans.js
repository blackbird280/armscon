import React from 'react'
import './Plans.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Plans(props) {
  const navigate=useNavigate()
  return (
    <div id="plans_container" style={{
        background:`${props.backgroundColor}`,
        color:`${props.color}`,
        boxShadow:`1px 0px 25px 3px ${props.special_color}`
    }}>
      <section>
        <h1 style={{
            color:`${props.special_color}`,
            borderBottom:`2px dashed ${props.special_color}`,
            textShadow:`0px 0px 20px ${props.special_color}`
        }}>{props.heading}</h1>
      </section>
      <article>
        <div id="pricing_container">
            <h2> at <span style={{
                color:`${props.special_color}`,
                textShadow:`0px 0px 20px ${props.special_color}`
            }}><CurrencyRupeeIcon/> {props.price} /-</span></h2>
        </div>
        <div id="offering">
        
            <ul>
                {props.incentives.map(
                    (item)=><li>{item}</li>
                )}
            </ul>
        </div>
      </article>
      <Button variant='outlined' color='error'onClick={()=>navigate('/registrationform')}>Register</Button>
    </div>
  )
}
