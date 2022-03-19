import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import ShopWindow from './components/ShopWindow';
import FeedbackList from './components/FeedbackList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Thanks from './components/Thanks';
import {FeedbackProvider} from './components/context/FeedbackContext'




function App() {



  return (
    <FeedbackProvider>
        <div className="App">
          <Router>
          <Navbar />
          <Header />
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
                  <FeedbackList />
                  
                </>
               
              }>
                </Route>
                <Route path='/thanks' element = {<Thanks/>}></Route>
            </Routes>
          </Router>
        </div>
      </FeedbackProvider>
  );
}

export default App;
