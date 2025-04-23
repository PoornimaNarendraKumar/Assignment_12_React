import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
