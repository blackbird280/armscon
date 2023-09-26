import React from 'react'
import ShowaboutCard from './ShowaboutCard'
import './About.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
export default function About() {
  const navigate=useNavigate()
  return (
    <div id="about_holder">
      <div id="about_text_holder">
      <h1>About</h1>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.         
      </p>
      </div>
      <section id="about_photos_holder">
      <img src='https://th.bing.com/th/id/OIP.fJm3y9RyeaIG_8TUuTtZjAHaEu?w=287&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
      <img src='https://th.bing.com/th/id/OIP.lU7kDU47juwlcw1FxlRPpwHaE6?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
      <img src='https://th.bing.com/th/id/OIP._L1pNJRcTlVxxvBm1zBw3wHaFj?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
      <img src='https://th.bing.com/th/id/OIP.JVoRSjfP6xLgbQ_oH7RYcAHaE7?w=283&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
      <div>
      <Button variant='contained'color='error'onClick={()=>navigate('/gallery')}>Explore Gallery</Button>
      </div>
      </section>
      
    </div>
  )
}
