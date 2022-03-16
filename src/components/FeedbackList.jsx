import React from 'react'
import FeedbackItem from './FeedbackItem'
import {AnimatePresence, motion}from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {
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
                    <FeedbackItem key={item.id} item = {item} handleDelete = {handleDelete}/>
                </motion.div>
            ))}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList