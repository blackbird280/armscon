import React from 'react'
import Coolhr from '../info/Coolhr'
import CoolCard from './CoolCard'
import StarnightBanner from './StarnightBanner'
import './About2.css'
import CallToRegister from './CallToRegister.js'
import Redirect from './Redirect'
import CoolTestimonialsContainer from './CoolTestimonialsContainer'
export default function About2() {
  return (
    <div id="about2_container">
      <h1 id="main_heading">
        What is ARMSCON?
      </h1>
      
      <p>
        <p>
        Calling all brilliant minds in the medical world! Join us at ARMSCON 2023, the ninth edition of this incredible event, where creativity and intellect collide to create an unforgettable experience. With a legacy of 10+ years, ARMSCON is officially recognized by organizations like NAAC, HMC, various Government and Non Govt. organisations etc.
        </p>
        <p>
        Grab the opportunity to unlock your potential and ignite the spark of innovation at the largest healthcare event hosting a multitude of workshops under one umbrella! It is the perfect platform to bring together brilliant minds and spark reciprocal action.
        </p>
        <p>
        ARMSCON is where it all happens! It presents constructive workshops, cultural events and entertaining nights to keep you on your toes.
        </p>
        
        <p>
        It's a feast and banquet for all the ingenious minds.
          'Get ready for an unforgettable celebration of medicine, music, and memories!'
          </p>
      </p>
      <Coolhr width="30%"/>
      <section id="about_armscon_details">
      <CoolCard number="20+" subheading="workshops"imgsrc="https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?size=626&ext=jpg&ga=GA1.1.1419283487.1684602633&semt=sph"/>
      <CoolCard number="50+" subheading="Events"imgsrc="https://img.freepik.com/free-vector/processing-concept-illustration_114360-1395.jpg?size=626&ext=jpg"/>
      <CoolCard number="10+" subheading="Culturals"imgsrc="https://img.freepik.com/free-vector/people-celebrating-lohri-festival-concept-illustration_114360-4167.jpg?size=626&ext=jpg&ga=GA1.2.1419283487.1684602633"/>
      </section>
      <StarnightBanner/>
      <Coolhr width="30%"/>
      <CoolTestimonialsContainer/>
      <Coolhr width="30%"/>
      <CallToRegister/>
    </div>
  )
}
