import React from 'react'
import { useState } from 'react'
import './RegistrationForm.css'
import { Button, InputLabel, MenuItem, TextField } from '@mui/material'
import FloatigBtn from './FloatigBtn'
import NavigationBar from './NavigationBar'


export default function RegistrationForm() {
  const [formdata, setFormdata] = useState(() => ({
    fullname: '',
    college: '',
    contact: '',
    plan: ''
  }));

  function validation() {
    const inputs=document.getElementsByTagName('input');
    let i=0;
    for(i=0;i<inputs.length;i++){
      if(inputs[i].value==""){
        
      }
    }
  }
  function handleInputChange(e) {
    setFormdata((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }
  function SubmitForm() {
    validation()
    fetch('http://localhost:8000/r', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdata)
    }).then(
      response => response.json()
    ).then(
      data => console.log(data)
    ).catch(err => console.log('Error : ', err))


  }

  return (
    <div id="registerationform_container">
      <FloatigBtn />
      <NavigationBar />
      <header>
        <h1>
          Armscon
        </h1>
      </header>
      <fieldset id="outline_feildset">
        <h1 id="register_l">Register</h1>
        <p id="info_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias dolorum provident aliquid quos! Eveniet recusandae odio ex officiis dolorum. Sapiente, tempore. Pariatur est, maxime animi esse eum a porro et.
        </p>
        <form >
          <div id="outer_div_box">
            <TextField label='Full name' variant='outlined' color='error' id="input_field"
              fullWidth
              className='input_field'
              name="fullname"
              value={formdata.fullname}
              onChange={handleInputChange}
            />
          </div>
          <div id="outer_div_box">
            <TextField label='Phone number' type="number" variant='outlined' color='error' id="input_field"
              fullWidth
              className='input_field'
              name="contact"
              value={formdata.contact}
              onChange={handleInputChange}
            />
          </div>
          <div id="outer_div_box">
            <TextField label='College name' variant='outlined' color='error' id="input_field"
              fullWidth
              className='input_field'
              name="college"
              value={formdata.college}
              onChange={handleInputChange}
            />
          </div>
          <div id="selected_plan">

            <section>
              <h2>Choose plan :</h2>
              <TextField select
                label='Plans'
                defaultValue="basic"
                name='plan'
                color='error'
              >
                <MenuItem key="basic_plan" value="basic">
                  Basic plans
                </MenuItem>
                <MenuItem key="diamond_plan" value="diamond">
                  Diamond plan
                </MenuItem>
                <MenuItem key="gold_plan" value="gold">
                  Gold plan
                </MenuItem>
                <MenuItem key="silver_plan" value="silver">
                  Silver plan
                </MenuItem>
              </TextField>
            </section>
            <p onClick={() => console.log(formdata)}>By clicking on the submit button you agree with the terms and conditions offered by the armscon 2023</p>
            <Button variant='contained' color='error' name="working" onClick={validation}>Register</Button>
           
          </div>
        </form>
      </fieldset>
    </div>
  )
}
