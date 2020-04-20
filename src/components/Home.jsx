import React, { Component } from 'react';

import CarouselComponent from './CarouselComponent.jsx';
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
            </>
        )
    }
}

export default Home;
