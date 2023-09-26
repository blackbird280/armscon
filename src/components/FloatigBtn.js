import React from 'react'
import { useState } from 'react';
import { Fab } from '@mui/material';
import './FLB.css'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { toggleCollapse } from './NavigationBar';
export default function FloatigBtn() {
    const [icon,setIcon]=useState(false);
    function xcv(){
        toggleCollapse()
        if(icon==true){
            setIcon(false);
        }
        else{
            setIcon(true)
        }
    }
  return (
    <div id="floating_Action_btn">
      <Fab color="error" aria-label="add" onClick={xcv}>
        {
            icon ? <ClearIcon/> : <MenuIcon/>
        }
      </Fab>
    </div>
  )
}
