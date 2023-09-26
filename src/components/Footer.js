import React from 'react'
import './Footer.css'
import Socails from './Socails'
export default function Footer() {
  return (
    <div id="Footer_container">
        <section>
           <ul>
            <h1>ARMSCON</h1>  
            <h5>Contact us</h5>
            <li>
              +91 9896083960
            </li>
            <li>
              +91 9869141685
            </li>
            <br/>
            <li>
              <small>
                <a href="https://www.instagram.com/ak.shansh.kumar/"style={{
                  color:'rgb(150,150,150)',textDecoration:'none'
                }}>Developed by: Akshansh Kumar</a>
              </small>
            </li>
          </ul>   
          <ul>
            <h1>Follow Us On</h1>  
            
            <li>
              <a href="https://www.instagram.com/armscon.uhsr/"style={{color:'white',textDecoration:'none'}}>Instagram</a>
            </li>
            <li>
              Youtube
            </li>
            
          </ul>        
        </section>
    </div>
  )
}
