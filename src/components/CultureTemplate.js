/*import React from 'react'

export default function CultureTemplate() {
  return (
    <div id="CultureTemplate_container">
      
    </div>
  )
}
*/

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CoolTemplateCards from './CoolTemplateCards.js'
import './Template.css'
import Coolhr from '../info/Coolhr'
import data from '../data/activities.js';
import NavigationBar from './NavigationBar.js';
import FloatigBtn from './FloatigBtn.js';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { NightShelter, Nightlife } from '@mui/icons-material';
import Top from './Top.js';
export default function CultureTemplate() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: '100%', typography: 'body1',background:'' }}>
      <header id="template_heading_Container">
        <h1>Activities</h1>
      </header>
      <NavigationBar/>
      <FloatigBtn/>
      <TabContext value={value} sx={{background:''}} >
        <Box sx={{ borderBottom: 0, borderColor: 'divider' ,background:''}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"variant='fullWidth'>
            <Tab label="Culturals" value="1" />
            <Tab label="Events" value="2" />
            
          </TabList>
        </Box>
       <TabPanel value="1"sx={{background:'',padding:'10px'}}>
          {
            data[0].map((item)=>
                <CoolTemplateCards heading={item.name} items={item.description} codon={item.img}/>
            )
          }

        </TabPanel>
        <TabPanel value="2">
        {
            data[1].map((item)=>
                <CoolTemplateCards heading={item.name} items={item.description} codon={item.img}/>
            )
          }
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        
      </TabContext>
      <Top/>
    </Box>
  );
}
//1923168.176.98