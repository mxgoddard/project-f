import React from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Components
import NavBar from './components/NavBar.jsx';
import Brand from './components/Brand.jsx';
import CarouselComponent from './components/CarouselComponent.jsx';
import MailingList from './components/MailingList.jsx';
import Socials from './components/Socials.jsx';
import Footer from './components/Footer.jsx';
import Copyright from './components/Copyright.jsx';

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <CarouselComponent />
        <MailingList />
        <Socials />
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
