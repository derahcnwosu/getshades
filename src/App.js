import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import ShopWindow from './components/ShopWindow';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SectionTitle text= 'Shop Available Shades'/>
      <ShopWindow/>
      <SectionTitle text= 'What Our Clients Are Saying'/>
    </div>
  );
}

export default App;
