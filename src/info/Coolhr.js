import React from 'react'
import './Coolhr.css'
import GradeIcon from '@mui/icons-material/Grade';
export default function Coolhr(props) {
  return (
    <div id="cool_hr_container">
      <hr style={{"width":`${props.width}`}}></hr>
      <span><GradeIcon/></span>
      <hr style={{"width":`${props.width}`}}></hr>
    </div>
  )
}
