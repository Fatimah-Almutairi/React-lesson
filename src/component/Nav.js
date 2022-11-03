import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  // const navigat = useNavigate();
  return (
    <div>
        <ul className='nav'>
            <li><Link to ="/Services">Services</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="Login">Login</Link></li>
            <li><Link to ="/Cards">Cards</Link></li>
            <li><Link to = '/Read'>Read</Link></li>
        </ul>
        {/* <button onClick={() => { navigat('/'); }}>Go Back</button> */}
    </div>
  )
}

export default Nav