import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='FooterOuterWrapper'>
                <div className='FooterDiv'>
                    <ul className='TempList'>
                        <li className='ListTitle'>Customer Services</li>
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
                </div>
            </div>
        )
    }
}

export default Footer;
