import React, {useContext} from 'react'
import Card from './Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)
  const {editFeedback} = useContext(FeedbackContext)

  return (
        <>
          <Card>
              <div className="text">{item.text}</div>
              <div className="num-display">{item.rating}</div>
              <div className="edit"><FaEdit color='#fff' onClick={() => editFeedback(item)}/></div>
              <div className="close" onClick={() => deleteFeedback(item.id)}><FaTimes color='#fff'/></div>
          </Card>
        </>
  )
}

export default FeedbackItem