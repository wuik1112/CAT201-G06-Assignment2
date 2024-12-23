import React from 'react';
import logoImage from './Logo.png';

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="company-name">
        <img src={logoImage} alt="Meow Puffy Logo" className="logo-image" />
      </a>
        <ul>
            <li className="active">
                <a href="/cats">Cats</a>
            </li>
            <li className="active">
                <a href="/menu">Menu</a>
            </li>
            <li className="active">
                <a href="/about">About Us</a>
            </li>
            <li className="active">
                <a href="/feedback">Feedback</a>
            </li>
            <li className="active">
                <a href="/contactus">Contact Us</a>
            </li>
        </ul>
    </nav>
    )
}