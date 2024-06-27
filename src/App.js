import './App.css';
import Home from './comp/Home';
import Navbar from './comp/Navbar';

import Event from './comp/Events';
// import Faculty from './comp/NewsEvents';
import { useEffect } from 'react';
import Footer1 from './comp/Footer1' 
import Projects from './comp/Projects';
import About from './comp/About'
import Contacts from './comp/Contacts';
import NewsEvents from './comp/NewsEvents/NewsEvents';
function App() {
  useEffect(() => {
    document.title = 'ACA'
}, []);
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Event />
      <NewsEvents />
      <Projects/>
      <Contacts/>
      <Footer1/>
    </div>
  );
}

export default App;
