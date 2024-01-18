import './App.css';
import Home from './comp/Home';
import Navbar from './comp/Navbar';

import Event from './comp/Events';
import Faculty from './comp/Faculty';
import { useEffect } from 'react';
import Footer1 from './comp/Footer1' 
import Projects from './comp/Projects';
import About from './comp/About'
import Contacts from './comp/Contacts';
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
      <Faculty />
      <Projects/>
      <Contacts/>
      <Footer1/>
    </div>
  );
}

export default App;
