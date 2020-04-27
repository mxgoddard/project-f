import React, { Component } from 'react';

import CarouselComponent from '../components/CarouselComponent.jsx';
import MailingList from '../components/MailingList.jsx';
import ShowcaseProducts from '../components/ShowcaseProducts.jsx';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselComponent />
                <ShowcaseProducts />
                <MailingList />
            </>
        )
    }
}

export default Home;
