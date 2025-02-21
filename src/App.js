import React from 'react';
import './App.css';
import HeaderTitle from "./components/HeaderTitle.js"
import NavBar from "./components/NavBar"; // Correct import for the NavBar component
import About from "./components/About"; // Ensure the filename and import casing match
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CreateBy from './components/CreateBy'
import WelcomeMessage from './components/WelcomeMessage';

import './styles/home.css'; 
import './styles/navbar.css'; 

function App() {
  return (
    <div className='App'> {/* this is where all of the webpage will be */}
           
      <NavBar />
      <div id='content'>
        <WelcomeMessage/> 
       
        <About /> {/* Now using the About component correctly */}
           <Experience />
        <Projects />

        <CreateBy />
     
  
      </div>
    </div>
  );
}

export default App;

