import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay={true} stopOnHover={false} showStatus={false} showThumbs={false} infiteLoop={true} emulateTouch={true} dynamicHeight={true}>
                    <div>
                        <img src='assets/gloves_test2.jpg' alt='' />
                    </div>
                    <div>
                        <img src='assets/gloves2_test1.jpg' alt='' />
                    </div>
                    <div>
                        <img src='assets/monty_compressed.jpg' alt='' />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default CarouselComponent;
