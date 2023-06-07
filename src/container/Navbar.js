import { Link } from "react-router-dom";

import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/aboutme'>AboutMe</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/contactme'>ContactMe</Link>
    </div>
  )
}

export default Navbar
