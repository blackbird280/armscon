import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CoolTemplateCards from './CoolTemplateCards.js'
import './Template.css'
import Coolhr from '../info/Coolhr'
import fullday_data from '../data/fullday.js'
import FloatigBtn from './FloatigBtn'
import NavigationBar from './NavigationBar.js';
import Top from './Top.js';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div>
     <NavigationBar/>
    <Box sx={{ width: '100%', typography: 'body1',background:'' }}>
      <header id="template_heading_Container">
        <h1>Workshops</h1>
      </header>
      <FloatigBtn/>
      
      <TabContext value={value} sx={{background:''}} >
        <Box sx={{ borderBottom: 0, borderColor: 'divider' ,background:''}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"variant='scrollable'>
            <Tab label="Fullday" value="1" />
            <Tab label="Halfday" value="2" />
            <Tab label="Dental" value="3" />
            <Tab label='Physiotherapy'value='4'/>
            <Tab label='Nursing'value='5'/>
          </TabList>
        </Box>
        <TabPanel value="1">
        {
          fullday_data[0].map((item)=>
              
          <CoolTemplateCards heading={item.heading} items={item.items} codon={item.imgsrc}/>
            
          )
        }
        </TabPanel>

        <TabPanel value="2">
        {
          fullday_data[1].map((item)=>
              
          <CoolTemplateCards heading={item.heading} items={item.items} codon={item.imgsrc}/>
            
          )
        }
        </TabPanel>

        <TabPanel value="3">
        {
          fullday_data[2].map((item)=>
              
          <CoolTemplateCards heading={item.heading} items={item.items} codon={item.imgsrc}/>
            
          )
        }
        </TabPanel>

        <TabPanel value="4">
        {
          fullday_data[3].map((item)=>
              
          <CoolTemplateCards heading={item.heading} items={item.items} codon={item.imgsrc}/>
            
          )
        }
        </TabPanel>
        <TabPanel value="5">
        {
          fullday_data[4].map((item)=>
              
          <CoolTemplateCards heading={item.heading} items={item.items} codon={item.imgsrc}/>
            
          )
        }
        </TabPanel>
        
      </TabContext>
      
    </Box>
    <Top/>
    </div>
  );
}
