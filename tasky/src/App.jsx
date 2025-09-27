// App.jsx
import React from 'react';
import './App.css';


import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';

function App() {
  return (
    <div className="container">
      <div className="section-wrapper2">
      <Header />
      <About />
      </div>
      
      <div className="section-wrapper">
        <Projects />
        <CV />
      </div>
    </div>
  );
}

export default App;
