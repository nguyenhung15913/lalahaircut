import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='nav-bar'> 
        <div className='logo'>
            <h1>La La HairCut</h1>
        </div>

        <ul className='menu'>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>About</a>
            </li>
            <li>
                <a  href=''>Services</a>
            </li>
            <li>
                <a href=''>Hours</a>
            </li>
            <li>
                <a href=''>Prices</a>
            </li>
            <li>
                <a href=''>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav
