import React from 'react'
import './home.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>LOGO</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/register">Signup</a></li>
        </ul>
    </div>
  )
}

export default Header