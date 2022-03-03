import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {FaCartPlus} from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar">
        <Router>
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
                <Link className='nav-link current' to= '/home'>Home</Link>
                <Link className='nav-link' to= '/about'>About</Link>
                <Link className='nav-link' to= '/contact'>Contact</Link>
                <Link className='nav-link' to= '/shop'><FaCartPlus /></Link>
            </motion.ul>
        </Router>
    </nav>
  )
}

export default Navbar