import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  // const navigat = useNavigate();
  return (
    <div>
        <ul className='nav'>
            <li>
            {/* <Link to ="/Store">Store</Link> */}
            </li>
            <li><Link to ="/Services">Services</Link></li>
            <li><Link to ="/About">About</Link></li>
            <li><Link to ="/Contact">Contact</Link></li>
        </ul>
        {/* <button onClick={() => { navigat('/'); }}>Go Back</button> */}
    </div>
  )
}

export default Nav