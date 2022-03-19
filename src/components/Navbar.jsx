import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'
import {FaCartPlus} from 'react-icons/fa'

function Navbar() {

  return (
    <nav className="navbar">
            <motion.h3 className='logo'
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type:'spring', stiffness: 6}}
            ><Link to="/home" className='getLink'>getShades.com</Link></motion.h3>
            <motion.ul className="nav-links"
                initial = {{x: 1000, opacity: 0}}
                animate = {{x: 0, opacity: 1}}
                transition = {{type:'spring', stiffness: 30}}
            >
                <NavLink id='nav-link' activeclassname ='active' to= '/'>Home</NavLink>
                <NavLink id='nav-link' activeclassname ='active' to= '/about'>About</NavLink>
                <NavLink id='nav-link' activeclassname ='active' to= '/contact'>Contact</NavLink>
                <NavLink id='nav-link' activeclassname ='active' to= '/shop'><FaCartPlus /></NavLink>
            </motion.ul>
    </nav>
  )
}

export default Navbar