import React from 'react'
import './Culturals.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function Culturals() {
  const navigate=useNavigate()
  return (
    <div id="Culturals_container">
        <h1>Culturals</h1>
        <article>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia culpa laudantium distinctio velit animi illum vitae eum voluptatem sit cum, veniam ducimus, cupiditate tempore pariatur hic dolorum rem ea fugit.
            </p>
            <img src="https://th.bing.com/th/id/OIP.BUTsRYfD8YQMFgO7F7GCyQHaF2?w=237&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            <div>
            <Button onClick={()=>navigate('/culturals')} variant='contained' color='error'>Explore Culturals</Button>
            </div>
            

        </article>
    </div>
  )
}
