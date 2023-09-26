import React, { useState } from 'react'
import CoolTestimonials from './CoolTestimonials'
import gh from '../data/testi.js';

export default function CoolTestimonialsContainer() { 
  
  return (
    <div id="CoolTestimonialsContainer">
      
            
      <h1>Testimonials</h1>
      <section id="ffffas">
      <p>
        
      </p>
      <main>

      {
        gh.map((item)=>
        <CoolTestimonials headname={item.headname} name={item.name}subheading={item.subheading} text={item.content[0]} imgsrc={item.imgsrc}fulltext={item.fulldata}/>
        )
      }
      
      </main>
      </section>
    </div>
  )
}
