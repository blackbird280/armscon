import React from 'react'
import Home2 from '../components/Home2'
import About2 from '../components/About2'
import FloatigBtn from '../components/FloatigBtn'
import NavigationBar from '../components/NavigationBar'
import Top from '../components/Top'
export default function Mainpage2() {
  return (
    <div id="mainpage_container">
      <Home2/>
      <FloatigBtn/>
      <NavigationBar/>
      <About2/>
      <Top/>
    </div>
  )
}
