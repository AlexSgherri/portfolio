import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import NavDropdownMenu from "../bundle/NavDropdownMenu";


export function Nav({ pageOffset, sectionsOffset }) {
    const [expand, setExpand] = useState(false)

    const expandDropdownMenu = () => {
        setExpand(prev => !prev)
    }

    return (
    <nav className="nav">
      <a className={`nav-link ${pageOffset >= 0 && pageOffset < sectionsOffset.skills ? 'active' : ''}`} href="#about">
        HOME
      </a>
      <a  className={`nav-link ${pageOffset >= sectionsOffset.skills && pageOffset < sectionsOffset.projects ? 'active' : ''}`} href="#skills">
        SKILLS
      </a>
      <a className={`nav-link ${pageOffset >= sectionsOffset.projects && pageOffset < sectionsOffset.stats ? 'active' : ''}`} href="#projects">
        PROJECTS
      </a>
      <a className={`nav-link ${pageOffset >= sectionsOffset.stats && pageOffset < sectionsOffset.contact ? 'active' : ''}`} href="#widget">
        STATS
      </a>
      <a className={`nav-link ${pageOffset >= sectionsOffset.contact ? 'active' : ''}`} href="#contact">
        CONTACT
      </a>
      <i onClick={()=> expandDropdownMenu()}>
        <HiOutlineMenu className="nav-menu" />
      </i>
        <NavDropdownMenu toggle={expandDropdownMenu} onExpand={expand ? "nav-expanded" : ""}/>
    </nav>
  );
}
