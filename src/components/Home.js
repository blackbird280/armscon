import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Home.css'
import '@splidejs/react-splide/css';
import Button from '@mui/material/Button'
import Socails from './Socails';
export default function Home() {
    return (
        <div className='container'>
            <div id="head_social"><Socails/></div>
            <Splide aria-label="My Favorite Images" options={{arrows:false,type:'slide',autoplay:false,interval:10000}}>
            
                <SplideSlide>
                    
                    <section id="s1">
                    <div className='item_container' id="item1_conatiner">
                        <div className='items' id="item1">
                            <div className='heading_conatiner'>
                                <h1>
                                    This is <span>Armscon!</span>
                                </h1>
                               <h2>
                                Inida's biggest medical conferance!
                               </h2>
                            </div>
                            
                        </div>
                        <a href='#page'><Button variant='outlined'color='error' id="explore_btn">Explore</Button></a>
                    </div>
                    </section>

                </SplideSlide>
                <SplideSlide>
                    <section id="s2">
                    <div className='item_container'id="item2_container">
                        <div className='item' id="item2">
                            <h1>Where the <span style={{color:'red'}}>Joy </span>Stands!</h1>
                        </div>

                    </div>
                    </section>
                </SplideSlide>
                <SplideSlide>
                    <section id="s3">
                        <div className='item_container' id="item3_container">
                            <div id="item3">
                                <h1>Where the <span>Memories</span> are made!!</h1>
                            </div>
                        </div>
                    </section>
                </SplideSlide>
            </Splide>
        </div>
    )
}
