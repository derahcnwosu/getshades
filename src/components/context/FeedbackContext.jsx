import {useState, createContext} from 'react'
import FeedbackData from '../../data/FeedbackData'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => (item.id !==id)))
      }

    const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext