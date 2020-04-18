import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    state = {
        text: "Hello, World!"
    }

    render() {
        return (
            <div className='topNav'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
                <a href="#wip">Work in progress ...</a>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.state.text);
    }
}

export default NavBar;
