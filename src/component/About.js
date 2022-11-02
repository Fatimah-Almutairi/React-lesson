import React from 'react'
import {  useNavigate } from "react-router-dom"

function About() {
    const navigat = useNavigate();
  return (
    <div>
        <p>Here Some Text About Us</p>
        <button onClick={() => {
        navigat('../App');
      }}>Go Back</button>
    </div>

  )
}

export default About