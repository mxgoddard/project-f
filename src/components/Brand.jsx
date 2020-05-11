import './Brand.css';
import React, { Component } from 'react';

class Brand extends Component {
    render() {
        return (

            <div className='BrandDiv'>
                <a href="/">
                    <img src='/assets/logo_vertex_inverted.png' className='brandImage' alt=''/>
                </a>
            </div>
        )
    }
}

export default Brand;
