import React, { Component } from 'react';
import './header.css';
class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#news">Topic</a>
                    <a href="#contact">Fun Code</a>
                    <a href="#about">Outside</a>
                </div>
            </div>
        )
    }
}

export default Header