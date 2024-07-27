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
            <div className='flex justify-between items-center h-[55px] bg-zinc-100' id='navbar'>
                <div id='mobileNav'>
                    <Link to="/about" className='text-4xl ml-5 hover:text-zinc-500'>{logoText}</Link>
                    <div id='burger' onClick={this.handleClick}>
                        <div id="line1" className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id="line2" className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id="line3" className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>

                <div id="desktopNav">
                        <Link to="/about" className='ml-10 text-3xl hover:text-zinc-500'>About</Link>
                        <Link to="/" className='ml-10 text-3xl hover:text-zinc-500'>Portfolio</Link>
                        <Link to="/contact" className='ml-10 text-3xl hover:text-zinc-500'>Contact</Link>
                </div>

                <div className={this.state.clicked ? 'navbar active' : 'navbar'} id='navbarStack'>
                    <div className='flex flex-col'>
                        <Link to="/about" className='text-3xl' onClick={this.handleClick}>About</Link>
                        <Link to="/" className='text-3xl' onClick={this.handleClick}>Portfolio</Link>
                        <Link to="/contact" className='text-3xl' onClick={this.handleClick}>Contact</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar