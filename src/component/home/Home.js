import React from 'react'
import Navbar from "../navbar/Navbar"
import Content1 from '../content1/Content1'
import Content2 from '../content2/Content2'

function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <Content1/>
        <Content2/>
    </div>
  )
}

export default Home