import React, { Component } from 'react';
import './NavBar.css';


class Navbar extends Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="http://www.google.com" target="_blank">Google</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;