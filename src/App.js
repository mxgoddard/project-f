import React from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Components
import Brand from './components/Brand.jsx';
import CarouselComponent from './components/CarouselComponent.jsx';
import Copyright from './components/Copyright.jsx';
import Footer from './components/Footer.jsx';
import MailingList from './components/MailingList.jsx';
import NavBar from './components/NavBar.jsx';
import ShowcaseProducts from './components/ShowcaseProducts.jsx';
import Socials from './components/Socials.jsx';

function App() {
  return (
    <div className="AppDiv">
        <Brand />
        <NavBar />
        <CarouselComponent />
        <ShowcaseProducts />
        <MailingList />
        <Socials />
        <Footer />
        <Copyright />
    </div>
  );
}

export default App;
