import React, { useState, forwardRef, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import './UHSR.css'
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Uhsr() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="uhsr_container">
      <Button variant="contained" color='error'onClick={handleClickOpen} id="open_uhsr_btn">
        
      </Button>
      <Dialog
        id="dialog_box_container"
        
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar position="relative" sx={{background:'rgb(210,10,10)'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 1, flex: 1 ,textAlign:'center'}} variant="h5" component="div">
              About UHSR
            </Typography>
            
          </Toolbar>
        </AppBar>
        <section id="uhsr_about_holder">
          <br/>
          <br/>
          <br/>
          <img src="https://th.bing.com/th/id/OIP.xy5Bki1zeUoFSy5udBiWOgHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
          <br/>
          <br/>
          <h1>University of health sciences</h1>
          <br/>
          <br/>
          <hr/>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolorum provident aliquid quos! Eveniet recusandae odio ex officiis dolorum. Sapiente, tempore. Pariatur est, maxime animi esse eum a porro et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit minus corrupti suscipit repudiandae provident
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolorum provident aliquid quos! Eveniet recusandae odio ex officiis dolorum. Sapiente, tempore. Pariatur est, maxime animi esse eum a porro et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit minus corrupti suscipit repudiandae provident
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolorum provident aliquid quos! Eveniet recusandae odio ex officiis dolorum. Sapiente, tempore. Pariatur est, maxime animi esse eum a porro et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit minus corrupti suscipit repudiandae provident
          </p>
          <hr/>
          <div id="vvv_cont">
          <Button variant='contained'color='error'>Explore Gallery</Button>
          </div>
          
        </section>
      </Dialog>
    </div>
  );
}
