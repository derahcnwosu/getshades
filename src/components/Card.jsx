import React from 'react'

function Card({children, height}) {

    const cardStyles = {
        height: height
    }
  return (
    <div className="card" style={cardStyles}>
        {children}
    </div>
  )
}

export default Card