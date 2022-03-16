import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import ShopWindow from './components/ShopWindow';
import Reviews from './components/Reviews';
import FeedbackData from './data/FeedbackData'
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'




function App() {

  const[feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => (item.id !==id)))
  }

  return (
        <div className="App">
          <Navbar />
          <Header />
          <Router>
            <Routes>
              <Route exact path= "/" element = {
                <>
                  <SectionTitle text= 'Shop Available Shades'/>
                  <ShopWindow/>
                </>
                }>
              
              </Route>
              <Route path='/about' element = {
                <>
                  <SectionTitle text= 'What Our Clients Are Saying'/>
                  {/* <Reviews /> */}
                  <FeedbackList feedback={feedback} handleDelete = {deleteFeedback}/>
                </>
               
              }>
                </Route>
            </Routes>
          </Router>
        </div>
  );
}

export default App;
