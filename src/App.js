import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"; // Correct import for the NavBar component
import About from "./components/About"; // Ensure the filename and import casing match
import Projects from "./components/Projects";

import './styles/home.css'; // Correct import for the CSS file
import './styles/navbar.css'; // Correct import for the CSS file

function App() {
  return (
    <div className='App'> {/* this is where all of the webpage will be */}
      <NavBar />
      <div id='content'>
       
        <About /> {/* Now using the About component correctly */}
        <Projects />
  
      </div>
    </div>
  );
}

export default App;

