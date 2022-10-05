import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
    return (
        <div>
            <Header />
            <Navbar />

        </div>
    );
}

export default App;