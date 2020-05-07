import React from 'react';
import { Router } from '@reach/router';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Pages
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Products from './pages/Products.jsx';

// Components
import Brand from './components/Brand.jsx';
import Copyright from './components/Copyright.jsx';
import Footer from './components/Footer.jsx';
import MailingList from './components/MailingList.jsx';
import NavBar from './components/NavBar.jsx';
import Socials from './components/Socials.jsx';

/*

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <Router primary={false}>
            <Home path='/' />
            <About path='/about' />
            <Products path='/products' />
            <Product path='/item/:itemId' />
        </Router>
        <Socials />
        <Footer />
        <Copyright />
    </div>
  );
}

*/

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <Router primary={false}>
            <Home path='/' />
        </Router>
        <MailingList />
        <Socials />
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
