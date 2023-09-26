import React from 'react'
import './CoolCard.css';
export default function CoolCard(props) {
  return (
    <div id="coolcard_container">
      <article>
        <img src={props.imgsrc}/>

      </article>
      <h1>{props.number}</h1>
      <h3>{props.subheading}</h3>
    </div>
  )
}
