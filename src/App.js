import React from 'react';
import { Router } from '@reach/router';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Components
import Brand from './components/Brand.jsx';
import Copyright from './components/Copyright.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Product from './pages/Product.jsx';

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <Router primary={false}>
            <Home path='/' />
            <Product path='/item/:itemId' />
        </Router>
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
