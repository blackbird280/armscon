import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import data from '../assets/gallery_images.json'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core'
import './Gallery.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FloatigBtn from './FloatigBtn';
import NavigationBar from './NavigationBar';
import Top from './Top';
export default function Gallery(props) {
    const [open, setOpen] = useState(false);
    const [src,setSrc]=useState('');
  const handleClickOpen = (src) => {
    setOpen(true);
    setSrc(src)
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="gallery_container">
        <FloatigBtn/>
        <NavigationBar/>
        <header>
            <h1>
                Gallery and Photos
            </h1>
        </header>
        <main>
            <h2>Special moments captured</h2>
        </main>
    <section>
      {
        data.map(
            (item)=><img src={item.link} id='short_images'onClick={()=>handleClickOpen(item.link)}/>
        )
      }
    </section>
    <Dialog
        open={open}
        
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent  className='dialog_text_container'sx={{padding:0}}> 
          <DialogContentText sx={{
            color:'white',
            padding:'0%',
            margin:'0%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <img src={src} style={{width:'100%'}}/>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
      <Top/>
    </div>
  )
}

