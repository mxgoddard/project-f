import React, { Component } from 'react';

import CarouselComponent from './CarouselComponent.jsx';
import Copyright from './Copyright.jsx';
import Footer from './Footer.jsx';
import MailingList from './MailingList.jsx';
import ShowcaseProducts from './ShowcaseProducts.jsx';
import Socials from './Socials.jsx';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselComponent />
                <ShowcaseProducts />
                <MailingList />
                <Socials />
                <Footer />
                <Copyright />
            </>
        )
    }
}

export default Home;
