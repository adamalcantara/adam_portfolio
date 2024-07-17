import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
        console.log("Testing the props" + this.props);
    }

    render() {
        const logoText = "<Adam />";

        return (
            <div className='flex justify-between items-center h-[55px]' id='navbar'>
                <div>
                    <div className='text-4xl ml-5'>{logoText}</div>
                    <div id='burger' onClick={this.handleClick}>
                        <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>
                <nav className='mr-5 text-3xl'>
                    <Link to="/about" className='ml-10'>About</Link>
                    <Link to="/" className='ml-10'>Portfolio</Link>
                    <Link to="/contact" className='ml-10'>Contact</Link>
                </nav>
            </div>
        )
    }

}

export default Navbar