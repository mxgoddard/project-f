import React, { Component } from 'react';
import { Link } from "@reach/router";
import './ShowcaseProduct.css';

class ShowcaseProduct extends Component {
    render() {
        return (
            <div className='ShowcaseProductOuterWrapper'>
                <Link to={`item/${ this.state.id }`}>
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
                </Link>
            </div>
        )
    }

    state = {
        id: -1,
        name: '',
        description: '',
        price: '',
        imageLink: ''
    };

    componentDidMount() {
        // OR componentWillMount ???
        this.setState({
            id: this.props.product.id,
            name: this.props.product.name,
            description: this.props.product.description,
            price: this.props.product.price,
            imageLink: this.props.product.imageLink
        });
    }
}

export default ShowcaseProduct;
