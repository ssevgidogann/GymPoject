import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Program from './Components/Program';
import Reasons from './Components/Reasons';
import Plans from './Components/Plans';
import Contact from './Components/Contact';
import Tesiminonials from './Components/Testimonials';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Tesiminonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
