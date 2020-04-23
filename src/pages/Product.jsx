import React, { Component } from 'react';
import ProductDisplay from '../components/ProductDisplay.jsx';

class Product extends Component {
    render() {
        return (
            <>
                <ProductDisplay id={ this.props.itemId }/>
            </>
        )
    }

    componentDidMount() {
        // Make API request for product data? Or make it in the display component?
        console.log(this.props);
    }
}

export default Product;
