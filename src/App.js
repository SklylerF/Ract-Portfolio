import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
        </div>
    );
}

export default App;