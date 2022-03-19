import React from 'react'
import {motion} from 'framer-motion'


function Button({children, isDisabled, version}) {

  return (
    <motion.button className={`btn btn-${version}`} disabled = {isDisabled} version = {version}
        initial ={{x: -50}}
        animate = {{x: 0}}
    >
        {children}
    </motion.button>
  )
}

export default Button