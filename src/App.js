import React from 'react';
import './App.css';

// Components
import NavBar from './components/NavBar.jsx';
import Brand from './components/Brand.jsx';
import Carousel from './components/Carousel.jsx';
import MailingList from './components/MailingList.jsx';
import Socials from './components/Socials.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <Carousel />
        <MailingList />
        <Socials />
        <Footer />
    </div>
  );
}

export default App;
