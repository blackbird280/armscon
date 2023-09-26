import React from 'react'
import './CoolTemplateCards.css'
import { Button } from '@mui/material'
import Coolhr from '../info/Coolhr'
import Redirect from './Redirect'
export default function CoolTemplateCards(props) {
  
  return (
    <div id="CoolTemplateCards_container">
      <section id="image_holder"style={{
        
        "background":`url(${props.codon})`,
        "backgroundSize":'100% 100%',
        "backgroundRepeat":'no-repeat',
        
      }}>

      </section>
      <header>
        <h1>{props.heading}</h1>
        
        <ul>
            {
                props.items.map((item)=>
                
                    <li>
                        {item}
                    </li>
                )
            }
        </ul>
        <div>
            <Button color='error' variant='contained'sx={{width:'60%'}} onClick={Redirect}>Register now</Button>
        </div>
      </header>
      <Coolhr width="50%"/>
    </div>
  )
}
