import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './CarouselComponent.css';

class CarouselComponent extends Component {
    render() {
        return (
            <div className='CarouselComponentDiv'>
                <Carousel autoplay={true} stopOnHover={false} showStatus={false} showThumbs={false} infiteLoop={true} emulateTouch={true} dynamicHeight={true}>
                    <div className='CarouselImg'>
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

// export default () => (
//     <div className='CarouselComponentDiv'>
//         <Carousel autoplay={true} stopOnHover={false} showStatus={false} showThumbs={false} infiteLoop={true} emulateTouch={true} interval='1' dynamicHeight={true}>
//             <div>
//                 <img alt="" src="assets/temp1.jpg" />
//             </div>
//             <div>
//                 <img alt="" src="assets/temp2.jpg" />
//             </div>
//         </Carousel>
//     </div>
// )

// class CarouselComponent extends Component {
//     render() {
//         return (
//             <div className='CarouselDiv'>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<CarouselComponent />, document.querySelector('.carousel-selector'));
//
// export default CarouselComponent;
