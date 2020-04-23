import React, { Component } from 'react';
import './ProductImages.css';

class ProductImages extends Component {
    render() {
        return (
            <div className='ProductImagesOuterWrapper'>
                <div className='ProductDiv'>
                    <div className='DisplayImages'>
                        <img src='../assets/category_glove_blue2.jpg' className='tbd3' alt='' />
                    </div>
                    <div className='ProductInfo'>
                        <p>Goalkeeper Gloves</p>
                        <p className='NameOfProduct'>The Blue Glove | £5.00</p>
                        <p className='ProductDescription'>This is the blue glove. Unknown origins however guranteed to stop any ball you need to.</p>
                        <a href='#buy-item' className='BuyButton'>Buy button</a>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props);
    }
}

export default ProductImages;
