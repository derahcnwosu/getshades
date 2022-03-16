import React from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item,handleDelete}) {
  return (

        <Card>
            <div className="text">{item.text}</div>
            <div className="num-display">{item.rating}</div>
            <div className="close" onClick={() => handleDelete(item.id)}><FaTimes color='#fff'/></div>
        </Card>

  )
}

export default FeedbackItem