import React from 'react'
import {  useNavigate } from "react-router-dom"

function Services() {
    const navigat = useNavigate();
  return (
    <div>
        <ul>
            <li>Services 1</li>
            <li>Services 2</li>
            <li>Services 3</li>
            <li>Services 4</li>
            <li>Services 5</li>
        </ul>
        <button onClick={() => {
        navigat('../App');
      }}>Go Back</button>
    </div>
  )
}

export default Services