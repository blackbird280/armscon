import { Button } from '@mui/material'
import React from 'react'
import './Home2.css';
import Redirect from './Redirect';
export default function Home2() {
  return (
    <div id="home2_container">
      <section>
        <article>

        </article>
        <article>
          <h3>The 9th Edition</h3>
            <h1>
                ARMSCON
            </h1>
            <h3>is finally Here!</h3>
        </article>
        <article id="btn_Cont">
            <Button variant='contained' color='error'sx={{
              width:'100%'
            }} onClick={Redirect}>Register now</Button>
        </article>
      </section>
    </div>
  )
}
