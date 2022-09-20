import React from 'react'

export default function NavDropdownMenu({ onExpand, toggle }) {
  return (
    <div className={`nav-dropdown ${onExpand}`}>
        <ul>
            <li ><a onClick={() => toggle()} className='nav-link' href="#about">HOME</a></li>
            <li ><a onClick={() => toggle()} className='nav-link' href="#skills">SKILLS</a></li>
            <li ><a onClick={() => toggle()} className='nav-link' href="#projects">PROJECTS</a></li>
            <li ><a onClick={() => toggle()} className='nav-link' href="#widget">STATS</a></li>
            <li ><a onClick={() => toggle()} className='nav-link' href="#contact">CONTACT</a></li>
        </ul>
    </div>
  )
}
