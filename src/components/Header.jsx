import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import Button from './Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'


function Header() {
    // const navigate = useNavigate()
    // const onClick = () => {
    //     navigate('/thanks')
    // }
    const {addFeedback} = useContext(FeedbackContext)
   
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true) 
    const [message, setMessage] = useState('')
    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !=='' && text.trim().length <=10) {
            setBtnDisabled(true)
            setMessage('Must be up to 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedback = {
            text,
            rating
        }
        addFeedback(newFeedback)
        setText('')
    }

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
               <input type="text" id='search' onChange={handleTextChange} value = {text}/>
                    <Link to= '#'><Button isDisabled = {btnDisabled} version = 'primary'
                       
                        // transition = {{type: 'spring', stiffness: }}
                    >Shop</Button></Link>
               </motion.div>
               <button className="submit" onClick={handleSubmit}>Submit</button>
               <RatingSelect select = {(rating) => setRating(rating)}/>
               {message && <div className='message'>{message}</div>}
               {/* <button className="done" onClick={onClick}>Done</button> */}
            </div>
        </div>
    </header>
  )
}

export default Header