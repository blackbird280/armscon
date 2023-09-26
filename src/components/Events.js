import React from 'react'
import './Events.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function Events() {
  const navigate=useNavigate();
  return (
    <div id="Events_container">
      <h1>Events / Competetions</h1>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.
      </p>
      <article>
        <img src="https://th.bing.com/th/id/OIP.eHW8BRhsZ8HuULuVHYLXiAHaGc?w=228&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <div>
            <Button variant='contained'color='secondary'onClick={()=>navigate('events')}>Explore Events</Button>
        </div>
      </article>
    </div>
  )
}
