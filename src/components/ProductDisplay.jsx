import React, { Component } from 'react';
import './ProductDisplay.css';

class ProductDisplay extends Component {

    state = {
        loading: true,
        id: -1,
        name: '',
        price: '',
        description: '',
        productInformation: '',
        imageLink: '',
        size: -1
    };

    render() {
        if (this.state.loading) return <h1>Loading...</h1>
        return (
            <div className='ProductDisplayOuterWrapper'>
                <div className='ProductDiv'>
                    <div className='CategoryParent'>
                        <span className='Category'>Vertex Goalkeeper Gloves</span>
                        <span className='Category2'>£17.95</span>
                    </div>
                    <div className='NameOfProduct'>
                        <span>'The Big Red'</span>
                    </div>
                    <div className='abc'>
                        <div className='ImageWrapper'>
                            <div className='DisplayImages'>
                                <img src={ this.state.imageLink } className='DisplayImage' alt='' />
                                <img src='../assets/img_glove_red_white_palm.png' className='DisplayImage' alt='' />
                            </div>
                        </div>

                        <div className='RestDiv'>
                            <div className='AddToCartDiv'>
                                <p>Add to Cart</p>
                            </div>

                            <div className='SelectSizeDiv'>
                                <p>Select Size</p>
                                <div className='SelectSizeButtons'>
                                    <button type="button" value='4'>4</button>
                                    <button type="button">5</button>
                                    <button type="button">6</button>
                                    <button type="button">7</button>
                                    <button type="button">8</button>
                                    <button type="button">9</button>
                                    <button type="button">10</button>
                                    <button type="button" className='DisabledSizeButton'>11</button>
                                </div>
                            </div>

                            <div className='ProductInfo'>
                                <p>{ this.state.description }</p>
                                <p>Features</p>
                                <ul>
                                    <li>Roll finger glove cut</li>
                                    <li>Contact latex</li>
                                    <li>Thumb wrap</li>
                                    <li>Punching zone</li>
                                    <li>Neoprene glove body</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // Scroll to top of the page
        window.scrollTo(0, 0);

        // Stubbed data until actual API request is created
        let products =
        [
            {
                id: 1,
                name: 'The Blue Glove',
                price: '5.00',
                description: 'This is the blue glove. Unknown origins however guranteed to stop any ball you need to.',
                productInformation: 'Flat palm cut,Contact Latex - Best on the market,Thumb Wrap,Full elastic wrist strap,Punching zone,Neoprene glove body',
                imageLink: '../assets/img_glove_blue_black_back.png'
            },
            {
                id: 2,
                name: 'The Red Glove',
                price: '10.00',
                description: 'This is the red glove. Unknown origins however guranteed to stop any ball you need to.',
                productInformation: 'Flat palm cut,Contact Latex - Best on the market,Thumb Wrap,Full elastic wrist strap,Punching zone,Neoprene glove body',
                imageLink: '../assets/img_glove_red_white_back.png'
            },
            {
                id: 3,
                name: 'The Orange Glove?',
                price: '15.00',
                description: 'This might be the orange glove. Unknown origins however guranteed to stop any ball you need to.',
                productInformation: 'Flat palm cut,Contact Latex - Best on the market,Thumb Wrap,Full elastic wrist strap,Punching zone,Neoprene glove body',
                imageLink: '../assets/img_glove_blood_orange_back.png'
            },
            {
                id: 4,
                name: 'The Definitely Orange Glove',
                price: '20.00',
                description: 'This is definitely the orange glove. Unknown origins however guranteed to stop any ball you need to.',
                productInformation: 'Flat palm cut,Contact Latex - Best on the market,Thumb Wrap,Full elastic wrist strap,Punching zone,Neoprene glove body',
                imageLink: '../assets/img_glove_orange_black_back.png'
            }
        ];

        // Make API request for data dependent on itemId

        this.setState({
            loading: false,
            id: this.props.id,
            name: products[this.props.id-1].name,
            price: products[this.props.id-1].price,
            description: products[this.props.id-1].description,
            productInformation: products[this.props.id-1].productInformation,
            imageLink: products[this.props.id-1].imageLink
        });
    }
}

export default ProductDisplay;

/*
<div className='DisplayImages'>
    <img src={ this.state.imageLink } className='DisplayImage' alt='' />
    <img src='../assets/category_glove_red4-front.png' className='DisplayImage' alt='' />
</div>
<div className='ProductInfo'>
    <p className='ProductCategory'>Goalkeeper Gloves</p>
    <p className='NameOfProduct'>{ this.state.name } | £{ this.state.price }</p>
    <p className='ProductDescription'>{ this.state.description }</p>
    <div className='ProductInformation'>
        <p>Product Features</p>
        <ul className='ProductInformationList'>
            { this.state.productInformation.split(',').map(el => {
                return (
                    <li>{ el }</li>
                );
            })}
        </ul>
    </div>
    <div className='SelectSize'>
        <span>Select size >>></span>
        <div className='SizeButtons'>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
        </div>
    </div>
    <div className='SelectColour'>
        <span>Select colour >>></span>
        <div className='ColourButtons'>
            <button type="button" className='BlueButton'>_</button>
            <button type="button" className='RedButton'>_</button>
            <button type="button" className='OrangeButton'>_</button>
        </div>
    </div>
    <div className='BuyButtonDiv'>
        <a href='#buy-item' className='BuyButton'>Buy now</a>
    </div>
</div>
*/
