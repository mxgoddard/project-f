import React, { Component } from 'react';

import CarouselComponent from '../components/CarouselComponent.jsx';
import ShowcaseProducts from '../components/ShowcaseProducts.jsx';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselComponent />
                <ShowcaseProducts />
            </>
        )
    }
}

export default Home;
