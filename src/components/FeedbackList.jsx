import React, {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import {AnimatePresence, motion}from 'framer-motion'
import FeedbackContext from './context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)
  return (
    <div className="feedback-list">
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                    className='item-card'
                    key={item.id}
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    exit = {{opacity: 0}}
                    transition = {{type: 'spring', stiffness: 30}}
                >
                    <FeedbackItem key={item.id} item = {item} />
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList