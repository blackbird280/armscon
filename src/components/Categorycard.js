import React from 'react'
import './Categorycard.css'
import ConstructionIcon from '@mui/icons-material/Construction';
import { Button, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from './CustomTheme';

export default function Categorycard(props) {
  const navigate=useNavigate();
  return (
    <ThemeProvider theme={theme}>
        <div id="category_card_container">
      <article style={{
        borderLeftColor:`${props.themecolor}`,
        color:props.themecolor
      }}>
        <div>
            <ConstructionIcon/>
        </div>
        <div>
            <h3>
                {props.title}
            </h3>
            <p>No. of Workshops : <span style={{
                color:`${props.themecolor}`
            }}>5</span></p>
        </div>
        <div>
            <Button variant='outlined'
                color={props.color_btn} onClick={()=>navigate(props.path)}
            >Explore</Button>
        </div>
      </article>
    </div>
    </ThemeProvider>
    
  )
}
