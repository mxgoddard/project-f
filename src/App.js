import React from 'react';
import { Router } from '@reach/router';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Pages
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';

// Components
import Brand from './components/Brand.jsx';
import Copyright from './components/Copyright.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <Router primary={false}>
            <Home path='/' />
            <Product path='/item/:itemId' />
            <About path='/about' />
        </Router>
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
