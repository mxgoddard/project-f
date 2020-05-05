import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='FooterOuterWrapper'>
                <div className='FooterDiv'>
                    <MediaQuery query="(max-device-width: 1024px)" /* Limited Render */>
                        <ul className='TempList'>
                            <li className='ListTitle'>Customer Service</li>
                            <li>
                                <a href="#help">
                                    Help
                                </a>
                            </li>
                            <li>
                                <a href="#delivery">
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a href="#payment">
                                    Payment
                                </a>
                            </li>
                        </ul>
                    </MediaQuery>
                    <MediaQuery query="(min-device-width: 1025px)" /* Render all */>
                        <ul className='TempList'>
                            <li className='ListTitle'>Customer Service</li>
                            <li>
                                <a href="#faq">
                                    FAQ's
                                </a>
                            </li>
                            <li>
                                <a href="#contact-us">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#order-tracking">
                                    Order Tracking
                                </a>
                            </li>
                        </ul>
                        <ul className='TempList'>
                            <li className='ListTitle'>Shopping</li>
                            <li>
                                <a href="#account">
                                    Account
                                </a>
                            </li>
                            <li>
                                <a href="#delivery">
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a href="#discount">
                                    Discounts
                                </a>
                            </li>
                        </ul>
                        <ul className='TempList'>
                            <li className='ListTitle'>About Us</li>
                            <li>
                                <a href="#terms-and-conditions">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#corporate">
                                    Corporate
                                </a>
                            </li>
                            <li>
                                <a href="#security-and-privacy">
                                    Security & Privacy
                                </a>
                            </li>
                        </ul>
                    </MediaQuery>
                </div>
            </div>
        )
    }
}

export default Footer;
