/*import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import About from './About';
import Testimonials from './Testimonials';
import Uhsr from './Uhsr';
import RegistrationCompartment from './RegistrationCompartment';
import Socails from './Socails';
import Footer from './Footer';

import Culturals from './Culturals';
import Workshops from './Workshops';
import Events from './Events';
import Starnight from './Starnight';
import EventsIntro from './EventsIntro';
import EventsMenu from './EventsMenu';
import './Body.css'
import Plans from './Plans';
import PlansShow from './PlansShow';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Body() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div id="tab_container">
        
    <Box sx={{ bgcolor: 'background.paper', }}>
      <div id="frr"style={{
        position:'sticky',
        
      }}> 

      
      <AppBar color='error'position='sticky'>
        <div className='tabsaa_container'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="inherit"

          variant="fullWidth"
          aria-label="full width tabs example"
          margin='0px'
          padding='0px'
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Registration" {...a11yProps(2)} />
        </Tabs>
        </div>
      </AppBar>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        id="page"
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
           
          <RegistrationCompartment/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <EventsMenu/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PlansShow/>
        </TabPanel>
      </SwipeableViews>
    </Box>
    </div>
  );
}*/
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import About from './About';
import Testimonials from './Testimonials';
import Uhsr from './Uhsr';
import RegistrationCompartment from './RegistrationCompartment';
import Socails from './Socails';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';
import Culturals from './Culturals';
import Workshops from './Workshops';
import Events from './Events';
import Starnight from './Starnight';
import EventsIntro from './EventsIntro';
import EventsMenu from './EventsMenu';
import './Body.css'

import PlansShow from './PlansShow';
import SwipeableViews from 'react-swipeable-views';
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;
   
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Body(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div id="body_container" >
      <div id="inside_box">

      
      <Box sx={{ bgcolor: '', }} >
      
        <div id="appbar_conatiner">
        <AppBar position='sticky'sx={{zIndex:100}}color='error'id="appbar">
          
          
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="white"
          textColor="inherit"

          variant="fullWidth"
          aria-label="full width tabs example"
          margin='0px'
          padding='0px'
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Events" {...a11yProps(1)} />
          <Tab label="Registration" {...a11yProps(2)} />
        </Tabs>
          
        </AppBar></div>
      
      
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        id="page"
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
           <About/>
           <Testimonials/>
          <RegistrationCompartment/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <EventsMenu/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <PlansShow/>
        </TabPanel>
      </SwipeableViews>
      
    </Box>
    </div>
    </div>
  )
}

