import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <link to='/'></link>
        </li>
        <li>
            <link to='/about'>About</link>
        </li>
        <li>
            <a href='/dashboard'>Dashboard</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
