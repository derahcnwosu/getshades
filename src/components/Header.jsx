import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import {motion} from 'framer-motion'


function Header() {
  return (
    <header className='header'>
        <div className="shades">
            <div className="container">
                <h1>getshades<span className='small-txt'>.com</span></h1>
                <p>Sunshades | Lenses | Frames</p>
               <motion.div className="search-tab"
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{stiffness: 10, type: 'spring'}}
               >
               <input type="text" id='search'/>
                <Router>
                    <Link to= '/shop'><motion.button className="btn" 
                        initial ={{x: -50}}
                        animate = {{x: 0}}
                        // transition = {{type: 'spring', stiffness: }}
                    >Shop</motion.button></Link>
                </Router>
               </motion.div>
            </div>
        </div>
    </header>
  )
}

export default Header