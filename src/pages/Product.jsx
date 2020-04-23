import React, { Component } from 'react';
import ProductImages from '../components/ProductImages.jsx';

class Product extends Component {
    render() {
        return (
            <>
                <ProductImages />
            </>
        )
    }

    componentDidMount() {
        // Make API request for product data
    }
}

export default Product;
