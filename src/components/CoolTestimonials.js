import React from 'react'
import './CoolTestimonials.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import { toggleCollapse } from './NavigationBar';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
export default function CoolTestimonials(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);  
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="testimonials_cool_container">
      <section id="main_cool_card_container">
        <div id="cont_1"className='cont'>
            <img src={props.imgsrc}/>
        </div>
        <div id="cont_2"className='cont'>
            <h2>
                {props.headname}
            </h2>
            <h4>
                {props.name}<br/>
                {props.subheading}
            </h4>
            <p>
            {props.text}
            </p>
            <div id="redmore_btn">
            <Button color="error" variant ="outlined" onClick={()=>handleClickOpen()}>
              Read more
            </Button>
            
            </div>
            
        </div>
        <section style={{
          'zIndex':'10000'
        }}>
        <Dialog
        open={open}
        fullScreen
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          zIndex:'100000000'
        }}
      >
        
        <DialogTitle sx={{
          "textAlign":'center',
          
          "padding":'0px'
        }}><section id="fff_container"><IconButton onClick={handleClose} color="error" variant="outlined" sx={{
          padding:'4%',
          fontSize:'larger'
        }}><CloseIcon/></IconButton><img src={props.imgsrc}/>{props.headname}</section></DialogTitle>
        <DialogContent> 
          
          <DialogContentText sx={{
            
            padding:'1% 1%'
          }}>
           
            <pre style={{

            }}>{
               props.fulltext
           }</pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>
      </section>
      </section>
    </div>
  )
}
