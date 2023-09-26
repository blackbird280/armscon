import React from 'react'
import './hlf.css';
import { Button } from '@mui/material';
import FloatigBtn from './FloatigBtn';
import {Fab} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import data_of_workshop from '../info/halfday';
export default function HLfcard(props) {
  return (
    <div id="container_hlf">
      <fieldset style={{
        border:`3px solid ${props.themecolor}`
      }}>
        <legend style={{
          border:`5px solid ${props.themecolor}`
        }}>
          <img src="https://th.bing.com/th/id/R.e6955dc6e5181aaab5bfd581fcdb4915?rik=sRIL0%2ff649Z1jA&riu=http%3a%2f%2fblog.3bscientific.com%2fwp%2fwp-content%2fuploads%2f2017%2f09%2fP101_13.jpg&ehk=ibWF7N%2b4LLC%2fb1LpkPkt5vvzjEJ1Ku4IW3mztKgEsX0%3d&risl=&pid=ImgRaw&r=0"/>
          
        </legend>
        <div>
          <h1 style={{
            borderRight:`5px solid ${props.themecolor}`,
            borderLeft:`5px solid ${props.themecolor}`
          }}>{props.heading}</h1>
          <h2> at <span style={{
            color:`${props.themecolor}`
          }}>Rs {props.price} /-</span></h2>
          <hr style={{
            border:`1px dashed ${props.themecolor}`
          }}/>
          <article>
            <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >What will you learn:</AccordionSummary>
          <AccordionDetails>
          {
            props.what_will_you_learn
          }
          </AccordionDetails>
          </Accordion>
          </article>
          <br/>
          <section>
            <Accordion>
             <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
                Details
           
              </AccordionSummary>
              <AccordionDetails>
              <ul>
                <li>Venue :<span style={{color:'white',background:`${props.themecolor}`,}}>{props.venue}</span> </li>
                <li>Time : <span style={{color:'white',background:`${props.themecolor}`,}}>{props.time}</span></li>
                <li>Date : <span style={{color:'white',background:`${props.themecolor}`,}}>{props.date}</span></li>
                <li></li>
              </ul>
              </AccordionDetails>
            </Accordion>
            <section>
            </section>
            <Button variant='contained' color={props.variant} id="rg_btn">
              Register
            </Button>
          </section>
        </div>
      </fieldset>
    </div>
  )
}
