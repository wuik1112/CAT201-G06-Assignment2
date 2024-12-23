import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <FaInstagram />
        </div>
        <p> &copy; 2024 meowpuffy.com</p>
    </div>
  );
}

export default Footer;