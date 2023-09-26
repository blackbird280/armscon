import React from 'react'
import './CircleCards.css'
import { Button } from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { toggleCollapse } from './NavigationBar';
export default function CircleCards(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);  
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='asdf'>
    <fieldset className='circlecard_container_fieldset'>
      <legend>
      <div id="CircleCard_container"
    style={{
        background:`linear-gradient(black,rgba(100,100,100,0.8)) , url("${props.img_url}") `
    }}
    >
      <h1>
        {props.heading}
      </h1>

    </div>
      </legend>
      <h1>{props.heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus beatae consectetur itaque maxime nemo possimus quaerat, dolor libero placeat nobis delectus reprehenderit tempore facere eaque unde quibusdam inventore cumque quidem.
      </p>
      <div id="reg_btn_container">
      <Button variant='contained' color='error'>Register</Button>
      <Button variant='text' color='error'onClick={()=>handleClickOpen()}>more info</Button>
        </div>
    </fieldset>
    <Dialog
        open={open}
        
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle  className='dialog_container'>{props.heading}</DialogTitle>
        <DialogContent  className='dialog_text_container'> 
          <DialogContentText sx={{
            color:'white',
            padding:'15% 2%'
          }}>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running
          </DialogContentText>
        </DialogContent>
        <DialogActions id="dialog_action_container">
         
          <Button onClick={toggleCollapse} variant='contained'color='error'>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
