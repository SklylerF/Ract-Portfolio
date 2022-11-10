import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Education from './components/education';
import Skills from './components/skills';
import Interests from './components/interests';
// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
    return (
        <div>

            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <Interests />
        </div>
    );
}

export default App;