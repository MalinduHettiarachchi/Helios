import React from 'react'
import Home from "../component/Home"
import Navbar from './Navbar'
import Aboutus from './Aboutus'
import BackImage from './backimage'
import Theteam from './Theteam'
import Backimg2 from './Backimg2'
import Services from './Services'
import Backimg3 from './Backimg3'
import Works from './Works'

function Deploy() {
  return (
    <div>
      <Home/>
      <Navbar/>
      <Aboutus />
      <BackImage />
      <Theteam />
      <Backimg2 />
      <Services />
      <Backimg3 />
      <Works />
    </div>
  )
}

export default Deploy
