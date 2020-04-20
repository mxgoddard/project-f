import React, { Component } from 'react';
import './ShowcaseProducts.css';

class ShowcaseProducts extends Component {
    render() {
        return (
            <div className='ShowcaseProductsOuterWrapper'>
                <div className='ShowcaseProductsDiv'>
                    <h3 className='ShowcaseProductCaption'>Products</h3>
                    <a href="#blue-gloves">
                        <img src='assets/category_glove_blue2.jpg' className='ShowcaseImg' alt='' />
                    </a>
                    <a href="#red-gloves">
                        <img src='assets/category_glove_red2.jpg' className='ShowcaseImg' alt='' />
                    </a>
                    <a href="#blood-gloves">
                        <img src='assets/category_glove_blood_orange2.jpg' className='ShowcaseImg' alt='' />
                    </a>
                    <a href="#orange-gloves">
                        <img src='assets/category_glove_orange2.jpg' className='ShowcaseImg' alt='' />
                    </a>
                </div>
            </div>
        )
    }
}

export default ShowcaseProducts;
