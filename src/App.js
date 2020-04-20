import React from 'react';
import { Router } from '@reach/router';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Components
import Brand from './components/Brand.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <Router primary={false}>
            <Home path='/' />
        </Router>
    </div>
  );
}

export default App;
