import React, { useEffect } from 'react'
import './NavigationBar.css'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import FeedIcon from '@mui/icons-material/Feed';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Redirect from './Redirect';
import PersonIcon from '@mui/icons-material/Person';
export default function NavigationBar({props}) {
    function Highlight(){
        const no=[0,1,2,3,4,5,6,7,8,9,10,11];
        const names=[
            '/',
           
            '/culturals',
           
           '/workshops',
            '/gallery',
           
        ]
        const blick=document.getElementsByClassName('blick');
        const path=window.location.pathname;
        const index=names.indexOf(path);
        blick[index].style.color='white';
        blick[index].style.textShadow='0px 0px 10px white';
        blick[index].style.fontSize='larger'

    }
    function collapseTabs(){
        var olin=document.getElementById('list_of_items_in_events');
        if(getComputedStyle(olin).height=='0px'){
            olin.style.height='auto';
        }
        else{
            
            olin.style.height='0px'
        }
    }
    useEffect(
        ()=>Highlight()
    )
    return (
        <div id="collapsible_navbar">
            <nav>
                <ul id="navbar_container">
                    <h1 onClick={()=>Highlight()}>ARMSCON</h1>
                    <Link to='/'className='link_style'><li value='/about'className='blick'><DonutLargeIcon className='margin_btween'/>About</li></Link>
                    
                    
                    <Link to="/culturals"className='link_style'><li className='blick'><ArchitectureIcon className='margin_btween'/>Activities</li></Link>
                    
                    
                    <Link to="/workshops"className='link_style'><li className='blick'><FeedIcon className='margin_btween'/>Workshops</li></Link>
                    <p>
                       
                    </p>
                    
                    <li><Button variant='outlined' color='error' onClick={()=>window.location.href="https://login.armscon.in/"}>
                        <PersonIcon/> User Login
                        </Button></li>
                    <li className='blick'><Button variant='contained'color='error' onClick={Redirect}>Registration</Button></li>
                    
                </ul>
            </nav>
            <section id="trademark_container">
                <p>&copy; ARMSCON 2023</p>
            </section>
            <Outlet />
        </div>
    )
}
export function toggleCollapse() {
    const navbar = document.getElementById('navbar_container');
    const navbar_styles = getComputedStyle(navbar);
    if(window.innerWidth>1000){
        
        if (navbar_styles.width == '0px') {
            navbar.style.width = '20vw';
        }
        else {
            navbar.style.width = '0px'
        }
    }
    if( window.innerWidth<1000){
        if (navbar_styles.width == '0px') {
            navbar.style.width = '70vw';
        }
        else {
            navbar.style.width = '0px'
        }
    }
    
}
