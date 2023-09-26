import React from 'react'
import './ShowAboutCard.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function ShowaboutCard(props) {
  const [toggleText,setToggleText]=useState(false);
  function ToggleCollapse(){
    var collapsed_card=document.getElementById('text_paragraph');
    if(toggleText==false){
      collapsed_card.style.height='100vh';
      collapsed_card.style.padding="10px";
      setToggleText(true);
    }
    else{
      collapsed_card.style.height='0px';
      collapsed_card.style.padding='0px';
      setToggleText(false);
    }
    
  }
  return (
    <div>
      <div id="collapse_card_container"onDoubleClick={()=>ToggleCollapse()}>
        <section id="section_of_collapse_card1">
            <img src={props.img_src}/>
        </section>
        <section id="section_of_collapse_card2">
            <h1>{props.heading}</h1>
            
            <p id="text_paragraph">
                <span>By: {props.name}</span><br></br>
                <br></br>
              {props.text}</p>
            
            
            <Button variant='outlined'color='error'onClick={()=>ToggleCollapse()}>{toggleText ? 'Hide' : 'Show More'}</Button>
        </section>
      </div>
    </div>
  )
}

