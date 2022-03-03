import React from 'react'
import {motion} from 'framer-motion'


function ShopWindow({bgImg}) {

  return (
    <motion.div className="shop container"
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{type: 'spring', stiffness: 10, delay: 3}}
    >
        <div className="item item-1">
            <div className="shades"></div>
        </div>
        <div className="item item-2">
            <div className="shades"></div>
        </div>
        <div className="item item-3">
            <div className="shades"></div>
        </div>
        <div className="item item-4">
             <div className="shades"></div>
        </div>
    </motion.div>
  )
}

export default ShopWindow