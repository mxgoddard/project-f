import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
    render() {
        return (
            <div className='CategoriesOuterWrapper'>
                <div className='CategoriesDiv'>
                    <div className='LeftBox'>
                        <h1>Abcd</h1>
                    </div>
                    <div className='CategoryBox'>
                        <h1>Bcde</h1>
                    </div>
                    <div className='CategoryBox'>
                        <h1>Cdef</h1>
                    </div>
                    <div className='RightBox'>
                        <h1>Defg</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;
