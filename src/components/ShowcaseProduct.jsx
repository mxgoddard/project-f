import React, { Component } from 'react';
import './ShowcaseProduct.css';

class ShowcaseProduct extends Component {
    render() {
        return (
            <div className='ShowcaseProductOuterWrapper'>
                <a href="#blue-gloves">
                    <div className='ShowcaseProductDiv'>
                        <img src={ this.state.imageLink } className='ShowcaseImg' alt='' />
                        <div className='ShowcaseText'>
                            <p className='ShowcaseTextName'>
                                { this.state.name }

                            </p>
                            <p className='ShowcaseTextRest'>
                                { this.state.description }
                            </p>
                            <p className='ShowcaseTextRest'>
                                £{ this.state.price }
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        )
    }

    state = {
        name: '',
        description: '',
        price: '',
        imageLink: ''
    };

    componentDidMount() {
        // OR componentWillMount ???
        this.setState({
            name: this.props.product.name,
            description: this.props.product.description,
            price: this.props.product.price,
            imageLink: this.props.product.imageLink
        });
    }
}

export default ShowcaseProduct;
