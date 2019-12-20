import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="topnav">
                    <Link
                        to={{
                            pathname: '/'
                        }}
                    >Home</Link>
                    <Link
                        to={{
                            pathname: '/topics'
                        }}
                    >Topics</Link>
                    <a href="#contact">Fun Code</a>
                    <a href="#about">Outside</a>
                </div>
            </div>
        )
    }
}

export default Header