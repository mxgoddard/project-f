import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

    state = {
        text: "Hello, World!"
    }

    render() {
        return (
            <div className='topNavDiv'>
                <a href="#home" className='headerSection'>Home</a>
                <a href="#about" className='headerSection'>About</a>
                <a href="#products" className='headerSection'>Products</a>
                <a href="#contact" className='headerSection'>Contact</a>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.state.text);
    }
}

export default NavBar;
