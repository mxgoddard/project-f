import React, { Component } from 'react';
import ShowcaseProduct from './ShowcaseProduct.jsx';
import './ShowcaseProducts.css';

class ShowcaseProducts extends Component {
    render() {
        return (
            <div className='ShowcaseProductsOuterWrapper'>
                <h3 className='ShowcaseProductCaption'>Showcase</h3>
                <div className='ShowcaseProductsDiv'>
                    <ShowcaseProduct product={ this.state.products[0] } />
                    <ShowcaseProduct product={ this.state.products[1] } />
                    <ShowcaseProduct product={ this.state.products[2] } />
                    <ShowcaseProduct product={ this.state.products[3] } />
                </div>
            </div>
        )
    }

    state = {
        products: [
            { name: 'Blue Glove', description: 'This is a blue glove, duh.', price: '5.00', imageLink: 'assets/category_glove_blue2.jpg' },
            { name: 'Red Glove', description: 'This is a red glove, duh.', price: '10.00', imageLink: 'assets/category_glove_red2.jpg' },
            { name: 'Orange Glove?', description: `If this is orange, whats the other one?`, price: '15.00', imageLink: 'assets/category_glove_blood_orange2.jpg' },
            { name: 'Definitely Orange Glove', description: 'This is definitely an orange glove.', price: '20.00', imageLink: 'assets/category_glove_orange2.jpg' }
        ]
    };
}

export default ShowcaseProducts;
