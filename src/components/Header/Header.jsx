import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';


export default class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <img src={logo} id="logo" alt="logotype"/>
                <nav className="menu">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </nav>
            </header>
        )
    };
}