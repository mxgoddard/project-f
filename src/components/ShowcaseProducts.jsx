import React, { Component } from 'react';
import ShowcaseProduct from './ShowcaseProduct.jsx';
import './ShowcaseProducts.css';

class ShowcaseProducts extends Component {
    render() {
        return (
            <div className='ShowcaseProductsOuterWrapper'>
                <h3 className='ShowcaseProductCaption'>Goalkeeper Gloves</h3>
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
            { id: 1, name: 'Blue Glove', description: 'This is a blue glove, duh.', price: '5.00', imageLink: 'assets/category_glove_blue3.JPG.png' },
            { id: 2, name: 'Red Glove', description: 'This is a red glove, duh.', price: '10.00', imageLink: 'assets/category_glove_red4.png' },
            { id: 3, name: 'Orange Glove?', description: `If this is orange, whats the other one?`, price: '15.00', imageLink: 'assets/category_glove_blood_orange3.JPG.png' },
            { id: 4, name: 'Definitely Orange Glove', description: 'This is definitely an orange glove.', price: '20.00', imageLink: 'assets/category_glove_orange3.JPG.png' }
        ]
    };
}

export default ShowcaseProducts;
