import logo from './logo.svg';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';
import React, { useState } from 'react';

const DATA = {
  name: "Hey, I'm Misala",
  subtext: "Web designer and Wordpress developer",
  location: "based in Mannheim, DE",
  resumeURL: 'https://www.misala.de/CV.pdf'
};

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollPosition(scrollY);
  };

  // Attach the handleScroll function to the scroll event
  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      <Left {...DATA} />
      <Right scrollPosition={scrollPosition}  resumeURL={DATA.resumeURL} />
    </div>
  );
}

export default App;
