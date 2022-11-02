import React from 'react'
import { Outlet } from 'react-router-dom'

function Dash() {
  return (
    <div>Outlite
        <Outlet />
    </div>
  )
}

export default Dash