import React from 'react'
import './Workshops.css'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
export default function Workshops() {
  const navigate=useNavigate();
  return (
    <div id="Workshop_container">
      <h1>Workshops</h1>
      <article>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.
        </p>
        <img src="https://th.bing.com/th/id/OIP.gVV-KPHgijYaHBvsno034QHaFi?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <div>
            <Button variant='contained'color='success' onClick={()=>navigate('/workshops')}>Explore Workshops</Button>
        </div>
      </article>
    </div>
  )
}
